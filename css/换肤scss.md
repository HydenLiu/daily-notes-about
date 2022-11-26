# 换肤scss

```scss
// variable.scss
// 定义从白到黑的色彩渐变，主要用来展示不同级别的常规文案字体颜色。
$white: #fff !default;
$gray-300: #dee2e6 !default;
$gray-600: #6c757d !default;
$gray-900: #212529 !default;
$black: #000 !default;

// 定义一套状态颜色，主要用来展示比如成功失败等各种状态
$primary: #0d6efd !default;
$success: #52c41a !default;
$info: #17a2b8 !default;
$warning: #fadb14 !default;
$danger: #dc3545 !default;

// 字体大小 浏览器默认16px
$font-size-base: 16px !default;
$font-size: 16px !default;
$font-size-lg: $font-size-base * 1.25 !default;
$font-size-slg: $font-size-base * 1.75 !default;
$font-size-sm: $font-size-base * 0.875 !default;

// 字重
$font-weight-normal: 400 !default;
$font-weight-medium: 500 !default;
$font-weight-bold: 600 !default;
$font-weight-super-bold: 700 !default;

// 行高
$line-height-base: 1.5 !default;
$line-height-lg: 2 !default;
$line-height-sm: 1.25 !default;

// default.scss
$theme-default: (
  color: $info,
  font-weight: $font-weight-bold,
  font-size: $font-size-lg,
);

// old.scss
$theme-old: (
  color: $danger,
  font-weight: $font-weight-bold,
  font-size: $font-size-slg,
);

// index.scss
$themes: (
  default: $theme-default,
  old: $theme-old,
);

$theme-map: null;

// 第三步: 定义混合指令, 切换主题,并将主题中的所有规则添加到theme-map中
@mixin themify() {
  @each $theme-name, $map in $themes {
    // & 表示父级元素  !global 表示覆盖原来的
    [data-theme="#{$theme-name}"] & {
      $theme-map: () !global;
      // 循环合并键值对
      @each $key, $value in $map {
        $theme-map: map-merge(
          $theme-map,
          (
            $key: $value,
          )
        ) !global;
      }
      // 表示包含 下面函数 themed()
      @content;
    }
  }
}

@function themed($key) {
  @return map-get($theme-map, $key);
}

```

### 组件中使用

```scss
// home.vue
document.getElementsByTagName("body")[0].setAttribute("data-theme", "default");

// scss
.home {
  padding: 10px;

  .t-home-title,
  .t-home-sub-title,
  .t-home-info {
    @include themify() {
      color: themed("color");
      font-weight: themed("font-weight");
      font-size: themed("font-size");
    }
  }
}
```

- 相当于下面的css, 转换地址：[https://www.sassmeister.com/](https://www.sassmeister.com/)

```css
.home {
  padding: 10px;
}
[data-theme=default] .home .t-home-title,
[data-theme=default] .home .t-home-sub-title,
[data-theme=default] .home .t-home-info {
  color: #17a2b8;
  font-weight: 600;
  font-size: 20px;
}
[data-theme=old] .home .t-home-title,
[data-theme=old] .home .t-home-sub-title,
[data-theme=old] .home .t-home-info {
  color: #dc3545;
  font-weight: 600;
  font-size: 28px;
}
```

- vue.config.js相应配置

```jsx
const fs = require("fs");
const webpack = require("webpack");

// 获取主题文件名
const themeFiles = fs.readdirSync("./src/style/theme");
let ThemesArr = [];
themeFiles.forEach(function (item, index) {
  let stat = fs.lstatSync("./src/style/theme/" + item);
  if (stat.isDirectory() === true) {
    ThemesArr.push(item);
  }
});

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 注意: 在sass-loader v8 中，这个选项是prependData
        additionalData: `@import "./src/style/theme/index.scss";`,
      },
    },
  },
  configureWebpack: (config) => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          THEMEARR: JSON.stringify(ThemesArr),
          THEMEFILES: JSON.stringify(themeFiles),
        }),
      ],
    };
  },
};
```
