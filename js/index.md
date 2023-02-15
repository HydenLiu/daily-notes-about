### 遍历 tree 结构

```js
changeTree(val) {
  if (val) {
    val.forEach((item, index) => {
      if (item.children === '') {
        item.children = []
      } else {
        changeTree(item.children);
      }
    });
  }
  return val;
},
```

### 图片加载失败时

```js
<img src="url" @error="handleError" alt="">

function handleError(e){
  e.target.src = require('图片路径') // 加载失败时的图片路径
}
```

### 截取 url 的文件名

```js
getFileName(url = '') {
  return url.substring(url.lastIndexOf('/') + 1)
},
```

### js 原生时间格式化

```js
//一般的时间格式话
function dateFormat(times) {
  if (!times) return ''
  const time = times.length === 10 ? new Date(times * 1000) : new Date(times)
  const y = time.getFullYear()
  const m =
    time.getMonth() + 1 < 10
      ? 0 + '' + (time.getMonth() + 1)
      : time.getMonth() + 1
  const d = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate()
  const h = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours()
  const mm =
    time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes()
  const s =
    time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
  return `${y}-${m}-${d} ${h}:${mm}:${s}`
}

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
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
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
    a: date.getDay(),
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

### toggleClass 点击添加删除类名

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

### axios 下载文件

```js
//文件名必须加上文件后缀
export function onPercentage(url, fileName) {
  axios({
    url,
    responseType: 'blob',
  })
    .then((res) => {
      //用blob 格式接收文件
      const blob = new Blob([res.data], { type: res.type })
      if ('download' in document.createElement('a')) {
        // 非IE下载
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = window.URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      } else {
        // IE10+下载
        navigator.msSaveBlob(blob, fileName)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
```

### 转换成数字

```js
//将输入值转换为数字。如果转换失败，则返回原始字符串。
function toNumber(val) {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}
```

### 整数转数组

```js
const convertToArray = (number) => [...`${number}`].map((el) => parseInt(el))

convertToArray(5678) // [5, 6, 7, 8]
```

### 创建一级对象的键值对数组

```js
const keyValuePairsToArray = (object) =>
  Object.keys(object).map((el) => [el, object[el]])

keyValuePairsToArray({ Better: 4, Programming: 2 })
// [['Better', 4], ['Programming', 2]]
```

### 回到顶部

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop //获取到顶端的距离
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop) //滚动动画效果
    window.scrollTo(0, c - c / 8)
  }
}
```

### 取两个日期之间相差的天数

```js
const getDaysDiffBetweenDates = (beginDate, endDate) => {
  let timestamp = new Date(endDate) - new Date(beginDate)
  return timestamp / 1000 / 60 / 60 / 24
}
// getDaysDiffBetweenDates(new Date("2020-09-22"), new Date("2020-10-01")) -> 9
```

### 数组扁平化

```js
// es6
arr.flat(Infinity)

// es5
function flatFun(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}
```

### 数组去重

```js
// es6
;[...new Set(arr)]

// es5
function unique(arr) {
  return arr.filter((item, index, array) => array.includes(item) === index)
}
```

### 函数柯里化

```js
function add(...arg) {
  const f = (...rest) => add(...arg, ...rest)
  f.valueOf = arg.reduce((a, b) => a + b, 0)
  return f
}
```

### 扁平化数据结构转 Tree

```js
const a = [
  { parentId: 'sdf', name: 'a', id: 'jpi' },
  { parentId: 'jpi', name: 'b', id: 'jsn' },
  { parentId: 'jpi', name: 'c', id: 'sdb' },
  { parentId: 'jsn', name: 'd', id: 'vde' },
  { parentId: 'vcb', name: 'e', id: 'ee' },
]

function toTree(arr) {
  let obj = {}
  arr.forEach((i) => {
    obj[i.id] = i
  })
  const pIdList = []
  // 获取到第一层的节点
  arr.forEach((v) => {
    if (!obj[v.parentId]) pIdList.push(v.parentId)
  })

  function loop(parentId) {
    return arr.reduce((pre, cur) => {
      if (cur.parentId === parentId) {
        cur.children = loop(cur.id)
        pre.push(cur)
      }

      return pre
    }, [])
  }
  const res = []

  pIdList.forEach((v) => {
    res.push(...loop(v))
  })
  return res
}

const res = toTree(a)
console.log(res)
```

### 字符串比较

```js
// localeCompare
areaData.sort((a, b) => a.registerDate.localeCompare(b.registerDate))
```

### replace 和 replaceAll

```js
// 方法解释：
// 两种方法都返回一个新字符串，原始字符串保持不变。并且改方法可以传两个参数：

// 参数一：pattern。 pattern 可以是一个 字符串 或一个 正则表达式，
// 参数二：replacement。 replacement 可以是一个字符串或一个在每次匹配被调用的函数。

// 当参数 pattern 类型不同时有区别：
// 当 pattern 是字符串时，replace 只替换匹配到的第一个位置，replaceAll 会替换每一个匹配到的地方。

let value = '123-456-789'
let pattern = '-'
value.replace(pattern, '') // 123456-789
value.replaceAll(pattern, '') // 123456789

let value = '123-456-789'
value.replace(/-/g, '') // 123456789
value.replaceAll(/-/g, '') // 123456789
```

### 判断数组内容的 id 是否连续

```js
// arr = [{id: 1}, {id: 3}]
const flag = arr.every((item, index, array) => {
  if (index !== array.length - 1) {
    return item.id + 1 === array[index + 1].id
  }
  return true
})
```

### 中划线将(驼峰式)命名的属性改为(下划线)式

```js
let obj = {
  myPlay: 12,
}

let newObj = {}
for (let key in obj) {
  newObj[key.replace(/([A-Z])/g, '_$1').toLowerCase()] = obj[key]
}
```

### 打乱数组的方法

```js
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.sort(() => Math.random() - 0.5)
```

### 数组中随机选一个数

```js
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
arr[Math.floor(Math.random() * arr.length)]
```

### 从 n 到 m 的随机一个整数

```js
function fn(n, m) {
  return parseInt(Math.random() * (m - n)) + n
}
```

### 快捷生成指定长度的数组

```js
// 1
Array.from(new Array(10).keys())
// 2
Array.from({ length: 10 }, (v, k) => k)
// 3
Array.from(Array(10), (v, k) => k)
```

### sleep 睡眠延迟方法

```js
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
```

### js 将数字转成 k w 方式显示

```js
export function formatNumber(num = 0) {
  return num >= 1e3 && num < 1e4
    ? (num / 1e3).toFixed(1) + 'k'
    : num >= 1e4
    ? (num / 1e4).toFixed(1) + 'w'
    : num
}
```

### 判断两个数组内容是否一样

```js
allSignType(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((v) => arr2.includes(v))
}
```

### 文本超出显示省略号和更多

```js
export function moreLine({ id, rows, content, moreText = 'more' }) {
  if (!window || !document) return
  const boxId = document.getElementById(id)
  const computedStyle = document.defaultView.getComputedStyle(boxId, null)

  if (!boxId || !computedStyle) return

  const lineHeight = computedStyle.lineHeight
  const top = (rows + 1) * parseInt(lineHeight)
  let tempStr = content
  boxId.innerHTML = tempStr
  let len = tempStr.length
  let i = 0
  if (boxId.offsetHeight > top) {
    let temp = ''
    boxId.innerHTML = temp
    while (boxId.offsetHeight <= top) {
      temp = tempStr.substring(0, i + 1)
      i++
      boxId.innerHTML = temp
    }
    tempStr = temp.substring(0, temp.length - 1)
    len = tempStr.length
    boxId.innerHTML =
      tempStr.substring(0, len - moreText.length) +
      '...' +
      `<span class="a" style='color: #77BEFF;'> ${moreText}</span>`
    boxId.height = top + 'rem'
    let en = document.querySelector('.a')
    en.onclick = function () {
      boxId.innerHTML = content
    }
  }
}
```
