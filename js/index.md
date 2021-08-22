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
      e.target.src = reqiure('图片路径') // 加载失败时的图片路径
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

###  js原生时间格式化

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

### axios下载文件

``` js
//文件名必须加上文件后缀
export function onPercentage(url, fileName) {
  axios({
    url,
    responseType: 'blob',
  }).then(res => {
    //用blob 格式接收文件
    const blob = new Blob([res.data],{ type: res.type });
    if ("download" in document.createElement("a")) {
      // 非IE下载
      const elink = document.createElement("a");
      elink.download = fileName;
      elink.style.display = "none";
      elink.href = window.URL.createObjectURL(blob);
      document.body.appendChild(elink);
      elink.click();
      URL.revokeObjectURL(elink.href); // 释放URL 对象
      document.body.removeChild(elink);
    } else {
      // IE10+下载
      navigator.msSaveBlob(blob, fileName);
    }
  }).catch(error => {
    console.log(error)
  })
}
```

### 转换成数字

``` js
//将输入值转换为数字。如果转换失败，则返回原始字符串。
function toNumber (val){
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}
```

### 整数转数组

```js
const convertToArray = number => [...`${number}`].map(el => parseInt(el))

convertToArray(5678); // [5, 6, 7, 8]
```

### 创建一级对象的键值对数组

``` js
const keyValuePairsToArray = object => Object.keys(object).map(el => [el, object[el]]);

keyValuePairsToArray({ Better: 4, Programming: 2});
// [['Better', 4], ['Programming', 2]]

```

### 回到顶部

``` js
const scrollToTop = _ => {
    const c = document.documentElement.scrollTop || document.body.scrollTop; //获取到顶端的距离
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);//滚动动画效果
            window.scrollTo(0, c - c / 8);
        }
};
```

### 取两个日期之间相差的天数

``` js
const getDaysDiffBetweenDates = (beginDate, endDate) => {
  let timestamp = new Date(endDate) - new Date(beginDate)
  return timestamp / 1000 / 60 / 60 / 24
};
// getDaysDiffBetweenDates(new Date("2020-09-22"), new Date("2020-10-01")) -> 9
```

### 数组扁平化

``` js
// es6
arr.flat(Infinity);

// es5
function flatFun(arr){
    while (arr.some(Array.isArray)){
        arr = [].concat(...arr)
    }
    return arr
}
```

### 数组去重

``` js
// es6
[...new Set(arr)]

// es5
function unique(arr){
    return arr.filter((item,index, array) => array.includes(item) === index)
}
```

### 函数柯里化

``` js
function add(){
    const args = [...arguments]
    function adder(){
        args.push(...arguments)
        return adder
    }
    adder.toString = function() {
        return args.reduce((a, b)=>{
            return a + b
        }, 0)
    }
    return adder
}
```

### 扁平化数据结构转Tree

``` js
let arr = [
    { pId: '-1', id: '0', name: '父级1' },
    { pId: '0', id: '1', name: '父级1-1' },
    { pId: '0', id: '2', name: '父级1-2' },
    { pId: '2', id: '21', name: '子级21' },
  ]

// 1
function buildTree (arr) {
  let temp = {}
  let tree = {}
  // 数组转 键值对, 所有想都在这里，键是id，值是item本身
  arr.forEach(item => {
    temp[item.id] = item
  })

  let tempKeys = Object.keys(temp)
  tempKeys.forEach(key => {
    // 获取当前项
    let item = temp[key]
    // 当前项 pId
    let _itemPId = item.pId
    // 获取父级项
    let parentItemByPid = temp[_itemPId]
    if (parentItemByPid) {
      if (!parentItemByPid.children) {
        parentItemByPid.children = []
      }
      parentItemByPid.children.push(item)
    } else {
      tree[item.id] = item
    }
  })
  // 对象转数组并返回
  return Object.keys(tree).map(key => tree[key])
}

// 2
function convert(list){
    const res = []
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    for (const item of list){
        if(item.pId === '0'){
            res.push(item);
            continue;
        }
        if(item.pId in map){
            const parent = map[item.pId]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return res
}
```

### 字符串比较

``` js
// localeCompare
areaData.sort((a, b) => a.registerDate.localeCompare(b.registerDate))
```

### replace和replaceAll

``` js
// 方法解释：
// 两种方法都返回一个新字符串，原始字符串保持不变。并且改方法可以传两个参数：

// 参数一：pattern。 pattern 可以是一个 字符串 或一个 正则表达式，
// 参数二：replacement。 replacement 可以是一个字符串或一个在每次匹配被调用的函数。

// 当参数 pattern 类型不同时有区别：
// 当 pattern 是字符串时，replace 只替换匹配到的第一个位置，replaceAll 会替换每一个匹配到的地方。


let value = "123-456-789";
let pattern = "-";
value.replace(pattern, ""); // 123456-789
value.replaceAll(pattern, ""); // 123456789

let value = "123-456-789";
value.replace(/-/g, ""); // 123456789
value.replaceAll(/-/g, ""); // 123456789
```



### 判断数组内容的id是否连续

``` js
// arr = [{id: 1}, {id: 3}]
const flag = arr.every((item, index, array) => {
      if (index !== array.length - 1) {
        return item.id + 1 === array[index + 1].id
      }
      return true
    })
```

### 中划线将(驼峰式)命名的属性改为(下划线)式

``` js
let obj = {
  myPlay: 12
}

let newObj = {}
for (let key in obj) {
  newObj[key.replace(/([A-Z])/g, "_$1").toLowerCase()] = obj[key]
};
```

### 打乱数组的方法

``` js
const arr = [0,1,2,3,4,5,6,7,8,9]
arr.sort( () => Math.random() - 0.5 )
```

### 数组中随机选一个数

``` js
const arr = [0,1,2,3,4,5,6,7,8,9]
arr[ Math.floor(Math.random() * arr.length) ]
```

### 从n到m的随机一个整数

``` js
function fn(n, m){
    return parseInt(Math.random() * (m - n)) + n
}
```

### 快捷生成指定长度的数组

``` js
// 1
Array.from(new Array(10).keys())
// 2
Array.from({length: 10}, (v, k) => k)
// 3
Array.from(Array(10), (v, k) => k)
```

### 判读两个数组里的值是否相等

``` js
isEqualArr(arr1, arr2){
    return arr1.length === arr2.length && arr1.every(v => arr2.indexOf(v) >= 0)
}
```

### sleep睡眠延迟方法

``` js
const sleep = (time) => new Promise(resolve => setTimeout(resolve, time) )
```

