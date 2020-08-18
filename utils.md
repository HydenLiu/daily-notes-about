### 遍历tree结构

```js
changeTree(val) {
        if (val) {
          val.forEach((item, index) => {
            if (item.children === '') {
              item.children = []
            } else {
              this.changeTree(item.children);
            }
          });
        }
        return val;
      },
```



### 图片加载失败时

``` js
// page 代码
<img :src="imgUrl" @error="handleError" alt="">
<script>
export default{
  data(){
    return{
      imgUrl:''
    }
  },
  methods:{
    handleError(e){
      e.target.src = reqiure('图片路径') //当然如果项目配置了transformToRequire,参考上面 27.2
    }
  }
}
</script>
```



### 截取url的文件名

``` js
getFileName(url) {
        if (url) {
          let string = url.substring(url.lastIndexOf('/') + 1);
          return string
        }
      },
```



### 双击字体不选中

``` css
div{
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
      user-select:none;
}
```

###  时间格式化

``` js
filters: {
      dateFormat: function (times) {
        if (!times) return '';
        var time = new Date(times * 1000);
        var y = time.getFullYear();
        var m = time.getMonth() + 1 < 10 ? 0 + '' + (time.getMonth() + 1) : time.getMonth() + 1;
        var d = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate();
        var h = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours();
        var mm = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes();
        var s = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds();
        return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
      },

    },
```

