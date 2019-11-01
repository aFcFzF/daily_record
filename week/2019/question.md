**点赞！希望所有版本支持该特性**

我们的政务**北京通小程序**共有600多项服务，目前上线276项，400多个页面，其中很多服务涉及表单、级联、复选、校验等功能。但在组件化的时候，遇到一个问题：无法确定父子组件，无法通信，组件扩展受限。

例如： 同一页面多个手风琴，实现当前节点展开，其他同级节点收起，并且内容可定制。

**思路1：** messages + dispatch  // 子组件给父组件发消息进行通信。`问题： 不支持slot，无法实现自定义组件组合，失去扩展性`

- 希望这样：
![图片](https://agroup-bos.cdn.bcebos.com/54142bff41f01f5111e28cddbc05fe6768f497b2)

- 结果只能这样(通过type去控制样式和结构，不可配置自定义扩展)：
![图片](https://agroup-bos.cdn.bcebos.com/a4598505fb5497fd12052a8c1b285ab689f05a45)
	``` js
 list: [
       {
            label: '四字',
            content: '内容',
            labelStyle: {},
            contentStyle: {}
            collapse: true
       }
   ]
	```
	---

**思路2：** 手动传id，通过 getCurrentPages()[last].uri + id 生成命名空间，用eventBus通信。`问题： 开发成本较高，同一页面表单流程有很多步骤，写错id就失去了表单校验及联动，排错较困难`。

- ![图片](https://agroup-bos.cdn.bcebos.com/b9085841b1c15e928bdbb80205a44ab94dd7d0ab)
- ![图片](https://agroup-bos.cdn.bcebos.com/9e987e9d2bf650c5960a430662abb4928a7c0d81)

---

**思路3：** 用内部方法找子节点。`问题： 可能端上api变动就失效了，风险较大。同时，query元素的效率较低，性能不佳`

- ![图片](https://agroup-bos.cdn.bcebos.com/cfef415672a2fbb7f02b0783a0f2ee34c7f12241)


---
我们调研了微信小程序，发现vant之所以实现了自定义组件嵌套，是因为支持relations。而常规的web框架也提供了provide/inject 方便组件开发。
![图片](https://agroup-bos.cdn.bcebos.com/f104de4a68816dd769d85b77f45d1432aaf72148)