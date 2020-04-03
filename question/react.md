## 这个如何优化

``` js
const useContent = () => {
    return useCallback(() => {
        console.log('useContent 执行');
        return 1111;
    }, []);
};
```

### 1. 什么是context，为什么要用，为什么不用
    - 给不同的组件赋相同的值
    - 优点：避免层层传递 （组件组合，类似于“高阶组件”）
    - 缺点：复用性差
    - 注意：必须是子组件中
    - defaultValue 和 value必须一一对应吗

### 2. useRefCallback 只能传到最后一再包吗？

### export function Menu<P>(props: IMenuProps<P>): JSX.Element { // 这是啥意思