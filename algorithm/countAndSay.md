### 报数
``` bash
1  1
2  11
3  21
4  1211
5  111221
```

``` js
// '1121'
countAndSay = n => {
    let s = '1';
	if (n === 1) return s;
	let r, l, j;
    while(--n) {
        const last = s.length - 1;
		r = '';
        l = j = 0;
        while(l <= last) {
            const char = s[l++];
            (char !== s[l] || l - 1 === last) && (r += l - j + char, j = l);
        }
		s = r;
    }
    return r;
};
```