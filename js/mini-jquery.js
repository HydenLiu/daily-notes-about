/*定义一个方法让我们更方便获取节点
* 1.定义一个装东西的容器
* 2.获取节点：判断传进来的是否是类名：
*   如果是以.开头，并且找不到空格，通过类名获取
*   否则，通过选择器All获取
* 3.将获取来的转换成数组
* 4.判断：如果数组长度为1，返回索引0
*         否则返回数组本身*/
function $ (selector) {
  /*1.定义一个装东西的容器*/
  let doms = [];

  /*2.获取节点：判断传进来的是否是类名：
  * 如果是以.开头，并且找不到空格，通过类名获取
  * 否则，通过选择器All获取
  */
  if (selector.startsWith(".") && selector.indexOf(" ") === -1) {
    doms = document.getElementsByClassName(selector.slice(1));
  } else {
    doms = document.querySelectorAll(selector);
  }

  /*3.将获取来的转换成数组*/
  doms = Array.prototype.slice.call(doms, 0);

  /*4.判断：如果数组长度为1，返回索引0
*         否则返回数组本身*/
  return doms.length === 1 ? doms[0] : doms;
}
