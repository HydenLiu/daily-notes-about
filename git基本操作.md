# Git

## 一、git init 方式关联远程仓库

### git 获取公钥

``` bash
ssh-keygen -t rsa -C '你的邮箱'
```

### 本地文件夹执行

``` bash
git init
```

### 关联远程分支

```  bash
git remote add origin 'url地址'
```

### 拉取远程分支

```bash
git pull origin  master --allow-unrelated-histories
git fetch 
```

### git add . 和 git commit -m 合并操作
```bash
git commit -am 'xxx'
```

### 重新修改commit的信息
``` js
git commit --amend
// 对上一条提交的信息的描述进行修改
git commit --amend -m "xxxx"
```

### 修改分支名称
``` bash
git branch -m '分支名称'
```

### 提交代码到远程

```csharp
git add .
```

```bash
git commit -m "第一次git init后提交"
```

```js
// 第一次push，指定远程分支。-u参数表示将当前本地分支与远程分支绑定。那么以后push就不用再加远程分支名了
git push -u origin master

// push默认分支
git push --set-upstream origin master
```

## 二、git 贴标签

```
git tag 1.0.0.001
```

```
git push origin --tags
```

## 三、合并说明提醒

```
i // 插入说明
esc // 推出插入
:wq // 退出
```

## 四、同时上传到github和gitee

``` 
1、删除git默认远程库的名称
git remote rm origin
```

``` 
2、分别关联gitee和github
git remote add gitee 'gitee项目地址'
git remote add github 'github项目地址'
```

``` 
3、推送
git push gitee master
git push github master
```

``` 
4、查看关联的仓库
git remote -v
```

## 清除缓存
- 如果是之前已经提交了，后面又加到了.gitignore文件里面，但是忽略功能不生效，就要清除git本地缓存
``` git
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```



