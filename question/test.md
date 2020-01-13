# 都是不会的

1. 写一个有并发限制的异步调度器，任务最多有2个
``` js
const test = () => {
    const fn = (ms = 0) => new Promise(r => setTimeout(r, ms));
    const queue = Array.from({length: 100}, (_, i) => () => fn(i));
    const pool = queue.splice(0, 2);
    const onFulfilled = () => {
        queue.length && queue.shift()().then(onFulfilled);
    };
    pool.forEach(e => e().then(onFulfilled));
};
```

2. 看看顺序
``` js
a1 = async () => {
    console.log('async start');
    await a2();
    console.log('async end');
};

a2 = async () => {
    console.log('async 2');
};

console.log('script start');

setTimeout(() => console.log('setTimeout'), 0);

a1();

new Promise(r => {
    console.log('promise');
    r();
}).then(() => console.log('promise2'));

console.log('script end');
```

3. await为啥是语法糖，写写嘛
``` js
const fn = function *() {
    const a = yield new Promise(r => setTimeout(r, 1000, 1000));
    const b = yield new Promise(r => setTimeout(r, 1200, 1200));
    const c = yield new Promise(r => setTimeout(r, 1300, 1300));
    return a + b + c;
};

fakeAsync = exector => new Promise(r => {
    const iter = exector();
    const handler = result => {
        const {value, done} = result;
        if (done === true) return r(value);
        if (value instanceof Promise) {
            return value.then(handler);
        }
        handler(iter.next(result));
    };

    try {
        handler(iter.next());
    }
    catch (e) {
        console.error('err: ', e);
    }
});

fakeAsync(fn).then(console.error);
```

错误答案：
``` js
delay = (ms = 0) => new Promise(r => setTimeout(r, ms, ms));

fn = function *() {
    const a = yield delay(1000);
    const b = yield delay(a + 200);
    const c = yield delay(a + b);
    console.log('a, b, c', a, b, c);
    return c;
};

asyncExec = exector => new Promise(r => {
    const iter = exector();
    const handler = (result = {}) => {
        const {value, done} = result;
        if (done) return r(value);
        if (value instanceof Promise) {
            handler(iter.next(result));
        }
    };

    try {
        console.log('iter', iter);
        handler(iter.next());
    }
    catch (e) {
        console.error('错误了: ', e);
    }
});

asyncExec(fn).then(console.log);
```


### Task never defined: [object Object]
gulp提示这个，肯定是因为哪个series方法没写多