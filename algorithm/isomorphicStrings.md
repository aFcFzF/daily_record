### 同构字符串

'ab' 'aa'

``` js
const isIsomorphic = function(t, s) {
    let len = t.length;
	if (len !== s.length) return false;
	const mapT = {};
	const mapS = {};
	while (len--) {
		const charT = t.charAt(len);
		const charS = s.charAt(len);
		if (mapT[charT]) {
			if (mapT[charT] !== charS) return false;
		}
		else {
			mapT[charT] = charS;
			if (mapS[charS]) return false;
			mapS[charS] = charT;
		}
	}
	return true;
};
```