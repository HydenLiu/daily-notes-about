## 优化

- v-if 和 v-show
- computed 缓存
- keep-alive 缓存组件
- 体积大的组件使用异步组件
  - vue3: `defineAsyncComponent(()=> import('xxx'))`
- 路由懒加载
- 服务端渲染 SSR（按需优化）

注意: 性能按需优化，不要为了优化而优化

## 问题

### 内存泄漏

- 全局变量、函数引起，组件销毁时未清除
- 全局事件、定时器引起，组件销毁时未清除
- 自定义事件引起，组件销毁时未清除

### Vue2 响应式的缺陷（vue3 不再有）

- data 里的对象新增属性用 Vue.set
- data 里的对象删除属性用 Vue.delete
- 无法直接修改数组 arr[index] = value

### vue组件渲染顺序引起的
- tab栏初始化为a, 但是a没有权限, 需要渲染的是b，但是这个时候a已经渲染了，里面的接口和方法都会执行

