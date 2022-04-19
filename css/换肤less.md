### 简单换肤 

* less页面
``` less
// 默认的主题颜色
@primaryColor: var(--primaryColor, #000);
@primaryTextColor: var(--primaryTextColor, green);

// css 使用
.color{
  color: @primaryColor;
}
```

* theme.js
``` js
export const themes = {
  default: {
    primaryColor: `${74}, ${144},${226}`,
    primaryTextColor: `${74}, ${144},${226}`,
  },
  dark: {
    primaryColor: `${0},${0},${0}`,
    primaryTextColor: `${0},${0},${0}`,
  },
}

export const changeStyle = (key) => {
  const obj = themes[key]
  for (let key in obj) {
    document
      .getElementsByTagName("body")[0]
      .style.setProperty(`--${key}`, obj[key]);
  }
}
```
* main.js
``` js
import { changeStyle } from "./themes";

// js 设置主题
changeStyle('default')
// changeStyle('dark')
```