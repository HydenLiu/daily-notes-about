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

