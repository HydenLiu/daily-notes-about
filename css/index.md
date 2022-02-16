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
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: off; */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

### CSS 调整字间距(letter-spacing)

``` css
h1 {letter-spacing:2px}
h2 {letter-spacing:-3px}
```

### 元素隐藏或消失的方法

``` css
visibility:hidden、display:none、z-index=-1、opacity：0
1.opacity：0; // 该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定了一些事件，如click事件也能触发
2.visibility:hidden; // 该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
3.display:node; // 把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删掉

4. z-index:-1000; // 将元素隐藏不占据空间，会改变页面布局，不能进行交互事件

5. position:absolute;top:-1000px;left:-1000px; //这个方法是通过将left和top的值设的很大，让元素定位到浏览器外面。不占据空间，不能点击; 将定位方式设置为relative或者fixed然后将其定位到浏览器外面可以达到同样的效果，区别在于使用relative定位仍会占有原有的空间，而使用absolute以及fixed定位不占据空间

6. transform:rotateY(90deg); //使用3d旋转，使元素隐藏，旋转x轴也可以达到同样的效果，要注意的是，css3 3D转换元素进行使用的时候，必须给父元素添加transform-style:preserve-3d;perspective:1000px;用于提供3D空间，以及设置景深

7. transform: scale(0,0); // 通过缩放达到元素消失的视觉效果，元素仍占据空间

8. width:0;height:0;overflow:hidden;
```

### style.scss
* 使用当前文件下的style.scss时，需要在vue.config.js里面配置
``` js
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');
module.exports = {
  chainWebpack(config) {
    config
    .plugin('Purgecss')
    .use(PurgecssPlugin, [{
      paths: glob.sync([
        path.join(__dirname, './public/index.html'),
        path.join(__dirname, './**/*.vue'),
        path.join(__dirname, './src/**/*.js')
      ], { nodir: true }),
      whitelist: ['html', 'body'],
      whitelistPatterns: [/el-.*/,/is-.*/,/v-(modal|bind)$/, /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!cursor-move).+-move$/, /^router-link(|-exact)-active$/],
      whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
    }])
    .end()
  }
}
```