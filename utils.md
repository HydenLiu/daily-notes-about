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

### 文本溢出显示省略号

```css
//单行
div{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
//多行
div{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 文本显示行数
  -webkit-box-orient: vertical;
}
```

### CSS 调整字间距(letter-spacing)

``` css
h1 {letter-spacing:2px}
h2 {letter-spacing:-3px}
```

