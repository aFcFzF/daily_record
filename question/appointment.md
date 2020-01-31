# record
## byte dance:
### 笔试：
1. 【简答】cdn原理及优化
2. 【简答】正则校验邮箱
3. 【简答】写出下列执行顺序
``` js
const a2 = async () => {
    console.log('async 2');
};

const a1 = async () => {
    console.log('async start');
    await a2();
    console.log('async end');
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
4. 【简答】设计一个autoComplete组件
4. 【编程3选2】写一个有并发限制的异步调度器，任务最多有6个
5. 【编程3选2】实现semver.satisfies（版本比较）
6. 【编程3选2】二叉树路径之和

### 一面:
1. 说下第一道题，你说的强制缓存、协商缓存
2. 宏任务、微任务、以及async为什么是语法糖
3. autoComplete组件聊了一会
4. 版本比较能用正则写一下么
5. Symbol.for()、iterator、toPrimitive
6. 说说你的表单组件如何实现校验
7. 你们小程序300多页面，如何保证不崩溃
8. esm和cjs区别
9. [].reduce 用过吗，写下求和
10. http2说下
11. 想问你react，但你不会。问点基础吧，一波es6基础题

### 二面：
1. 表单校验
2. 你说做过级联组件，给你一组value，找出下标和值，要求性能
3. 你日历咋做的？如何获取当前月份天数，1号周几是怎么做的。
4. 移动端1px怎么做的，3种方法
5. 三列布局，左右固定100px，中间自动撑开，5种方法
6. 垂直居中，3种，还有吗？还有吗？
7. bfc
8. 下滑刷新怎么做的，touch事件有几个？touchcancel什么时候触发，你这个双指交替下拉怎么做到的
...

### 三面
1. 【编程】如下图，界面有3个小球A、B、C，A先移动，两秒走到和B相切，然后B开始移动，走到C相切，然后C移出去。
    - 如何保证一定相切后，下个小球才移动
    - 如果不能用transition呢
    - 你的定位都是左上角吧，如何调整坐标基准
    - canvas如何保证相切
    - 如何保证时间，手机电池都可能影响时间
![](2020-01-13-23-08-16.png)

2. 【编程 解析jsx】给你一个dom字符串，解析属性，生成ast
3. 忘了。。一些小题


## tencent
### 一面
1. 模块化：
    - 答： amd、cjs、esm、ts system；
    - cjs和esm有什么不同
    - ts如何兼容esm 和 cjs
    - esm里面const，作用域
    - 浏览器顶层对象一定是window吗？
    - 【编程】简单实现一下amd吧

2. http2
    - 有多少特性你知道
    - 一定要ssl吗

3. es6 说下
4. ts泛型
5. webpack
    - tree shaking, 我猜他想问vue-next onMounted优化，但没什么了解- -！
    - 性能优化
    - definePlugin
    - 多入口
    - postcss 插件

6. vue
    - time slicing 原理（不会）
    - 双向绑定 vue3做了什么，优点
    - slot 场景
    - tsx检测属性
    - vuex，namespaced，mutation和action区别

7. 算法：给一个数组，生成可能的bst
8. canvas、webgl 相关，不咋会
9. 性能这块，有什么想法

### 二面
1. 小程序为什么可以用类vue
2. react和vue有啥场景，为啥
3. 看政务小程序问组件
5. debounce 性能问题，lodash是怎么做的
6. 写xhr，之后问了简单/复杂请求、跨域cookie、http-only、server-request、csp。。。
7. ts特性、除了约束还有什么
8. 小程序如何实现的，为啥要master-slaver 这种，你是如何实现单测的，gulp你是怎么配的，为什么要用gulp，pipe、steam简单说下
9. 以后想做什么

### 三面
业务多些：做小程序最大的困难是什么；你的缺点是什么；你解决了什么；如何管理项目


## didi:
### 笔试
#### 简答部分
1. css position5个值
2. height inherit 和 100%啥区别
3. 类实现DOM增删改查
4. 长连接
5. esm require/exports/module.exports 区别，能说说原理吗
6. process.nextTick / setImmediate / setTimeout / Promise.resolve 顺序题

#### 编程部分
1. 给一个url数组，用js异步并发请求，然后顺序输出结果
2. 实现简易模板引擎
``` js
const tpl = (template, data) {

};

tpl('<div class="{%className%}">{%name%}</div>', {name: '123', className: 'didi'});

// <div class="didi">123</div>
```
3. 创建两元素A和B, 距离100px, B绕A匀速旋转。
4. 镜像二叉树

### 一面
1. position
    - sticky 兼容性问题，如何自己实现，有什么问题
    - 层级样式上下文怎么回事，给你一个 absolute，再插入一个relative，哪个在上面

2. ...

## gen shui xue
### 1面
1. 自我介绍
2. 说下es6数组特性。存在哪？连续的？和啥有区别？arrayLike？gc？实现过吗？
3. 【编程】数组只有0、1、2这三种，不定长度排序。还有吗？还有方法吗？O(n)啊
4. map和reduce啥区别，咋实现
5. es6数组啥还有啥？same value equality？实现一下？
6. 1w个item列表，咋渲染不卡，小程序极限是多少？
7. 工程化你知道啥？
    - webpack都有啥？
    - tree shaking是啥？
    - esm都有效吗？
    - postcss能把属性都拆分吗？
    - 怎么做？
    - 预编译呢？
    - 插件和loader啥区别？
    - 能写个插件吗？
8. 静态服务器
    - stream？
    - buffer？
    - alias、rewrite啥区别
    - 优化
9. h5都有啥问题，咋解决的，不同模块拆分粒度多细
10. 请求头你知道哪些
11. vue
    - 说下模板解析
    - 为啥要用ast、一一对应吗？解决了啥？和data如何通信的
    - patch详细说下，实现过吗？v-dom如何生成
    - 数据通信，你确定是单向的吗？和双向绑定冲突吗？
    - router如何定义，如果关闭页面做弹框，多少种方法

### 2面
1. 自我介绍，说技术相关的
2. 为啥小程序用m/s这种方案，你做了啥
3. 不要说业务，说技术
4. 只会组件吗？AsyncValidator动态校验，组件设计。要多看，不要用你的固有思维
5. 样式定制化？都有哪些方案
6. 工程化，shell能写吗?知道babel transform原理吗？Jenkins呢？单测？
7. 【编程】给你一段日志，找出1s以内的所有请求对。所有啊，[[1, 2], [2, 3], [1, 3]]这样
8. 会用okam，原理了解过吗？啥是静态编译，怎么做的，除了静态，动态了解不？
8. 你还会啥？react会吗？
