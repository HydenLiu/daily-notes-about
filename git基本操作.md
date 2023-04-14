# Git

## git init 方式关联远程仓库

### git 获取公钥

```bash
ssh-keygen -t rsa -C '你的邮箱'
```

### git 配置

```bash
git config --global user.name "Your Name"
git config --global user.email "you@your-domain.com"
```

```bash
# 设置默认提交分支
git config --global --add push.default current
git config --global --add push.autoSetupRemote true
```

```bash
# 设置全局忽略文件
# ~/.gitignore_global
*~
.DS_Store
.idea
```

### 本地文件夹执行

```bash
git init
```

### 关联远程分支

```bash
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

### commit

```bash
# 重新修改 commit 的信息
git commit --amend
# 对上一条提交的信息的描述进行修改
git commit --amend -m "xxxx"
```

### 修改分支名称

```bash
git branch -M '分支名称'
```

### 提交代码到远程

```bash
git add .
```

```bash
git commit -m "第一次git init后提交"
```

```bash
# 第一次push，指定远程分支。-u参数表示将当前本地分支与远程分支绑定。那么以后push就不用再加远程分支名了
git push -u origin master

# push默认分支
git push --set-upstream origin master
```

## rebase

```bash
git rebase release
# 如果有冲突，解决冲突后执行--continue
git rebase --continue
# 如果不想解决冲突，执行--abort
git rebase --abort
# 解决完冲突后， force push到远程
git push --force
```

## git 贴标签

```
git tag 1.0.0.001
```

```
git push origin --tags
```

## 同时上传到 github 和 gitee

```bash
# 1、删除git默认远程库的名称
git remote rm origin
```

```bash
# 2、分别关联gitee和github
git remote add gitee 'gitee项目地址'
git remote add github 'github项目地址'
```

```bash
# 3、推送
git push gitee master
git push github master
```

```bash
# 4、查看关联的仓库
git remote -v
```

## 清除缓存

- 如果是之前已经提交了，后面又加到了.gitignore 文件里面，但是忽略功能不生效，就要清除 git 本地缓存

```bash
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
```

## pr 相关

```bash
# 绑定之前fork的仓库
git remote add upstream '项目地址'

# 然后拉取最新代码
git pull upstream master
```
