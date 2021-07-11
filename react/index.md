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

  