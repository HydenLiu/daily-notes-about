# npm 发布相关

``` js
1、npm login // 然后输入账户名、密码、邮箱
  // 注意：登录要切换为原来的源 npm config set registry https://registry.npmjs.org/
2、npm publish // 发布
3、npm unpublish 包名 --force  // 删除包
4、npm link // 本地项目和本地npm模块建立连接，在本地进行模块测试
5、npm unlink // 解除项目和模块link, 注意：npm包发布后，下载远程包前先执行npm unlink解除本地项目link
```


# pmpm
* bumpp: npm包，可以更新包的版本号，可以更新包的依赖
``` 
bumpp package.json packages/*/package.json --commit --push --tag && pnpm -r publish --access public
```
* pnpm-workspace.yaml
``` yaml
# 批量安装packages文件里的依赖
packages:
  - 'packages/*'
```
