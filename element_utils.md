### Clickoutside.js

* 点击被插入该指令的元素外的任意空白处，触发指令所绑定的方法。

* 使用方法

  ``` vue
  //引入
  import Clickoutside from 'element-ui/src/utils/clickoutside'
  
  //声明指令
  directives: { Clickoutside }
    
  //组件使用
  
  <div v-clickoutside="handleClickOutside">
  </div>
  ```

  