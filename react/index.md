### setState 是同步的还是异步的

*   由 React 控制的事件处理程序， 以及生命周期函数调用 setState 不会同步更
  新 state 。  这个时候看上去是异步的

*   React 控制之外的事件中调用 setState 是同步更新的。 比如原生 js 绑定的事
  件， setTimeout/setInterval 等。  

   ``` jsx
  class Example extends React.Component {
      constructor() {
          super()
          this.state = {
              val: 0
          }
      } 
      componentDidMount() {
          this.setState({ val: this.state.val + 1 })
          console.log(this.state.val)
          // 第 1 次 log
          this.setState({ val: this.state.val + 1 })
          console.log(this.state.val)
          // 第 2 次 log
          setTimeout(() => {
              this.setState({ val: this.state.val + 1 })
              console.log(this.state.val)
              // 第 3 次 log
              this.setState({ val: this.state.val + 1 })
              console.log(this.state.val)
              // 第 4 次 log
          }, 0)
      } 
      render() {
          return null
      }
  }
  // 答：0, 0, 1, 2
   ```


### 受控组件和非受控组件

- 非受控组件： 一些 dom 元素比如 input 其内部默认维护了自己的状态（输入值）以及状态改变的方法，我们可以通过 ref 的方式获取其内部的状态。这种组件称之为非受控组件。
- 受控组件： 当我们使用 react 中的 state 去接管组件的状态（设置非受控组件 value 属性关联 state），使得 react 的 state 成为组件的数据源，并且为组件提供了修改状态的方式（设置非受控组件 onChange 属性，根据输入值改变 state 状态）这种组件称之为受控组件（状态及状态改变完全由 react 接管）。

### useMemo和useCallback

* 都会对数据进行缓存
* 区别：
  * useMemo返回的是函数计算的值
  * useCallback 返回的是函数本身