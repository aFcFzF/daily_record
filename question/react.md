## 这个如何优化

``` js
const useContent = () => {
    return useCallback(() => {
        console.log('useContent 执行');
        return 1111;
    }, []);
};
```