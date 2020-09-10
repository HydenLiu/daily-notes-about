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
//一般的时间格式话
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
        
/**
 * 时间格式化添加格式
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * 设置时间距离
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}
```

### toggleClass点击添加删除类名

```js
/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}
```

### 多行文本溢出显示省略号

```css
div{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
```

### 下载文件

``` js
// 首先创建数据对象, url链接
const data = {hello: "world"};
// 创建Blob并指定mine类型
const blob = new Blob([JSON.stringify(data)], {type: "text/plain"});
// 文件名命名
const fileName = `${new Date().valueOf()}.doc`;
// 创建a标签，指定标签通过createObjectURL关联blob对象
const link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
// 通过download属性规定下载文件名
link.download = fileName;
// click触发下载
link.click();
// 通过revokeObjectURL释放url对象
window.URL.revokeObjectURL(link.href);
```

