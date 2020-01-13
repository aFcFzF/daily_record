# ts问题
1. 为啥断言编译出错呢
``` ts
const getLen: (src: number | string) => boolean = src => {
    if (typeof (src as string).length == 'number') {
        return true;
    }
    return false;
};
```
结果：
``` js
var getLen = function (src) {
    if (typeof (src))
        as;
    string;
    length == 'number';
    {
        return true;
    }
    return false;
};
```

2. 类型断言和类型保护场景是啥？

3. 好丑的代码: 为啥想不到用数组呢？
``` ts
export default function buildURL(url: string, params?: any, serializer?: Function): string {
    if (!params) {
        return url;
    }
    // 判断url连接符号
    const join = /\?/.test(url) ? '&' : '?';
    url = url.replace(/#.+$/, '');

    if (serializer) {
        const result = serializer(params);
        return `${url}${result ? join : ''}${result}`;
    }

    let result = '';
    if (isObject(params)) {
        for (const [key, val] of Object.entries(params)) {
            if (Array.isArray(val)) {
                result += '&' + val.map(v => `${encode(key)}[]=${encode(v)}`).join('&');
            }
            else if (typeof val === 'object' && val !== null) {
                if (isDate(val)) {
                    result += `&${encode(key)}=${(val as Date).toISOString()}`;
                }
                else {
                    result += `&${encode(key)}=${encodeURI(JSON.stringify(val))}`;
                }
            }
            else if (val != null) {
                result += `&${encode(key)}=${encode(val + '')}`;
            }
        }
    }
    else {
        result = '' + encode(params);
    }
    result = result.slice(1);
    return `${url}${result ? join : ''}${result}`;
}

```