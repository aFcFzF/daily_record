self.onmessage = e => console.log('我是子线程啦', e);

self.postMessage({
    childMsg: '子线程发你消息啦',
    fn() {}
});

self.onmessageerror = e => {
    console.warn('发生了错误: ', e);
};
