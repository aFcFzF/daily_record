### 学习Promise

1. Promise 缺点
``` js
1. 一旦运行，无法取消执行
2. 内部错误，外部无法获取 (见第7点)
3. 当处于pending的时候，无法知道刚开始执行还是即将结束
```

2. p1 决定p2 状态 (p1 reject, 则p2 catch)
``` js
const p1 = new Promise((r, j) => setTimeout(r, 5000, 1))
.then(d => console.log(d)); // 1

const p2 = new Promise(r => r(p1))
.then(console.log); // 5s fulfilled;
```

3. exector return则不执行
``` js
new Promise((r, j) => {
    return r(1);
    console.log(2); // 不会执行；
})

// 因为：
const exector = (r, j) => {
    return r(1);
    console.log(2);
};

const resolve = value => {
    setTimeout(() => {
        this.status = 'fulfilled';
        this.onFulfillCallbacks.forEach(cb => cb(value));
    });
};
exector(resolve, reject);
```

4. then 方法定义在 Promise#上，并且返回一个`新的Promise实例`，因此可以链式调用。
5. 前一个then可能返回一个promise对象，所以存在异步情况，后一个then在前一个promise完成才执行。
6. catch 是then(undefined, reject)的别名
``` js
new Promise((r, j) => {})
.then(console.log)
.then(undefined, console.error);

// 下面两种写法也是等价的
new Promise((r, j) => {
    try {
        // ...
    }
    catch (e) {
        j('error')
    }
});
```

7. Promise会吃掉错误（内部错误不会影响到外部。和异步有关？）
``` js
new Promise((r, j) => r(1))
.then(d => console.log(d.toLowerCase()))
.catch(e => console.log('p2 errored!'));
console.log('123'); // 123
setTimeout(() => console.log(456)); // 456
```

8. node 有个unhandleRejection 专门监听未捕获的reject错误
``` js
process.on('unhandleRejection', err => {throw err});
```

9. finally 在es2018 引入标准, finally没值也没参数，不依赖于状态。

10. promise.all里面的item如果有自己的catch，那么all的catch就不会捕获了。
（因为catch返回的是promise实例，all的catch只会得到结果）

11. race 返回的是一个值, 和all一样，如果某个catch处理了错误，那就捕获不到。

12. async 同样会吃掉异常
``` js
// 同步：
(() => {throw 123})()
console.log('next');
// 结果 Uncaught 123;

// 异步：
(async () => {throw 123})();
console.log('next');
// next;
// Uncaught 123;
```

13. Promise.try 是想把同步的也包装成thenable。 2333

Promise.try(f).then 这样。然而chrome还不支持。

方法1：
``` js
f1 = () => '是同步的';
f2 = () => '异步';

const exec = fn => (async () => fn())();
exec(f1).then(console.log); // 是同步的
exec(f2).then(console.log); // 异步
```

方法2：
``` js
exec = fn => Promise.resolve(fn());
```

14. 循环引用也会报错
``` js
p = Reflect.construct(Promise, [(r, j) => r(1)]);

p.then(p); //
```

---
### simple实现
1. 只有fulfilled 情况
2. then没有传值
3. then没有返回新对象
4. 静态方法也没有
4. 啥都没有 (⊙o⊙)

``` js
PromoseA = class {
    constructor(exector) {
        this.status = 'pending';
        this.onFulfillCallbacks = [];

        const resolve = value => {
            setTimeout(() => {
                this.status = 'fulfilled';
                this.value = value;
                const fulfill = this.onFulfillCallbacks.shift();
                typeof fulfill === 'function' && fulfill(value);
            });
        };
        exector(resolve);
    }

    then(resolve) {
        if (this.status === 'fulfilled') {
            resolve(this.value);
            return this;
        }

        this.onFulfillCallbacks = this.onFulfillCallbacks.concat(resolve || []);
        return this;
    }
}
```

### 进一步

``` js
PromiseA = class {
    constructor(exector) {
        this.status = 'pending';
        this.value = this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const reject = reason => {
            setTimeout(() => {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(cb => cb(reason));
            })
        };

        const resolve = value => {
            setTimeout(() => {
                this.status = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(cb => cb(value));
            })
        };

        try {
            exector(resolve, reject);
        }
        catch (err) {
            reject(err);
        }
    }

    resolvePromise(newPromise, prevResult, resolve, reject) {
        // prevResult有三种情况： 1. 是promise 2. thenable 3. 其他值

        if (newPromise === prevResult) {
            throw 'Chaining cycle detected for promise';
        }

        if (this.isPromise(prevResult)) {
            if (prevResult.status === 'pending') {
                prevResult.then(
                    value => {
                        // const result = resolve(); 这块为啥不需要求值了？
                        resolvePromise(newPromise, value, resolve, reject)
                    },
                    reason => reject(reason)
                )
            }
            else {
                prevResult.then(resolve, reject);
            }
        } else if (prevResult != null && (typeof prevResult.then === 'function')) {
            try {
                prevResult.then(
                    value => resolvePromise(newPromise, value, resolve, reject),
                    reason => reject(reason)
                );
            }
            catch (e) {
                reject(e);
            }
        }
        else {
            reject(prevResult);
        }
    }

    isPromise(o) {
        return o instanceof PromiseA;
    }

    then(onFulfilled, onRejected) {
        // 两种状态： pending和决议
        let newPromise;

        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason;
        };

        if (this.status === 'pending') {
            return newPromise = new PromiseA((r, j) => { // 链式调用
                this.onFulfilledCallbacks.push(value => { // 放入chain的时候，同时把下一轮的值计算好
                    try { // 要加try不
                        const result = onFulfilled(value);
                        this.resolvePromise(newPromise, result, r, j);
                    }
                    catch (e) {
                        j(e);
                    }
                });
                this.onRejectedCallbacks.push(reason => {
                    try {
                        const result = onRejected(reason);
                        this.resolvePromise(newPromise, result, r, j);
                    }
                    catch (e) {
                        j(e);
                    }
                });
            });
        }

        if (this.status === 'fulfilled') {
            return newPromise = new PromiseA((r, j) => {
                setTimeout(() => {
                    try {
                        const result = onFulfilled(this.value);
                        this.resolvePromise(newPromise, result, r, j);
                    }
                    catch (e) {
                        j(e);
                    }
                });
            });
        }

        if (this.status === 'rejected') {
            return newPromise = new PromiseA((r, j) => {
                setTimtout(() => {
                    try {
                        const result = onRejected(this.reason);
                        this.resolvePromise(newPromise, result, r, j);
                    }
                    catch (e) {
                        j(e);
                    }
                });
            });
        }
    }
}
```
