### map

1、初始化 `new Map()`

2、map的增删查

* 取值

  ``` js
  let json = {
    name: 'dong',
    skill: 'web'
  }
  let map = new Map();
  map.set('iam',json);
  console.log(map.get('iam'))  //{ name: "dong", skill: "web" }
  ```

* 删除delete

  ``` js
  let json = {
    name: 'dong',
    skill: 'web'
  }
  let map = new Map();
  map.set('iam',json);
  map.delete('iam',json);
  console.log(map) //Map(0){}
  ```

* 查找是否存在 has

  ``` js
  let json = {
    name: 'dong',
    skill: 'web'
  }
  let map = new Map();
  map.set('iam',json);
  console.log(map.has('iam')) //true
  ```

* 清除所有元素clear

  ``` js
  let json = {
    name: 'dong',
    skill: 'web'
  }
  let map = new Map();
  map.set('iam',json);
  map.clear()
  console.log(map) //Map(0){}
  ```

* 长度size

  ``` js
  let json = {
    name: 'dong',
    skill: 'web'
  }
  let map = new Map();
  map.set('iam',json);
  console.log(map.size) //1
  ```

  