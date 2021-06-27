* vue统一配置全局插件，全局方法，全局指令，全局mixin，全局实例方法prototype, 全局插槽filter

```js
// utils/myPlugin.js
let myPlugin = {}
myPlugin.install = (Vue, options) => {
    //全局方法
    Vue.myGlobalMethod = () => {
        ......
    }   
       
}
export default myPlugin
```

