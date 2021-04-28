## 报错合集

##### 【1】问题：app.38450395.js:1 Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'

* 描述：可能是webpack版本更新了冲突（网上答案） 

* 解决办法： 

  ``` vue
  //babel.config.js或者在vue.config.js里面配置
  module.exports = {
    presets: [
      '@vue/app'
    ],
    sourceType: 'unambiguous'
  }
  ```

##### 【2】问题：npm install 提示权限不足

* 解决办法 : ` npm install --unsafe-perm`

##### 【3】问题：电脑休眠停止了时间定时器

* 描述： 从服务器获取时间，将时间存到浏览器，用定时器每秒加一运行，但是电脑休眠会停止定时器，结束休眠时间定时器开始还是休眠前的时间

* 解决办法：

  ``` js
  //获取服务器时间
  async severTime() {
      try {
          const res = await getServerTime()
          this.serveDate = res.data
      } catch (err) {
          console.log(err);
      }
  }
  async interval() {
      if (!getToken()) return
      await this.severTime()
      // 定时器
      this.timer = null
      this.timer = setInterval(async () => {
          this.serveDate = this.serveDate + 1000
          const storageTime = window.sessionStorage.getItem('storageTime') * 1
          // 本地存储时间跟上一次存储时间是否相差一分钟
          const isLoad = storageTime + 60 * 1000 < Date.now()
  
          if (!storageTime || (storageTime && isLoad)) {
            // 再加一个延时器  
              setTimeout(async () => {
                  await this.severTime()
              }, 1000)
          }
          window.sessionStorage.setItem('severTime', JSON.stringify(this.serveDate))
          window.sessionStorage.setItem('storageTime', JSON.stringify(Date.now()))
  
      }, 1000)
  }
  ```

  