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
```

### 提交代码到远程

```csharp
git add .
```

```bash
git commit -m "第一次git init后提交"
```

```cpp
// 第一次push，指定远程分支。-u参数表示将当前本地分支与远程分支绑定。那么以后push就不用再加远程分支名了
git push -u origin master
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



# npm 发布相关

``` 
1、npm login // 然后输入账户名、密码、邮箱
  // 注意：登录要切换为原来的源 npm config set registry https://registry.npmjs.org/
2、npm publish // 发布
3、npm unpublish 包名 --force  // 删除包
4、npm link // 本地项目和本地npm模块建立连接，在本地进行模块测试
5、npm unlink // 解除项目和模块link, 注意：npm包发布后，下载远程包前先执行npm unlink解除本地项目link
```

