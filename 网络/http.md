# 应用层

## http 1.0
- 只有get和post方法
- 没有状态管理
- 无法处理大文件
- 无法处理cookie
- 无法处理https
- 无法处理长连接

## http 1.1
- 增加了put,delete,head,option等方法
- 增加了长连接
- 增加了管道机制
- 增加了host
- 增加了缓存机制
- 增加了状态管理
- 增加了cookie
- 增加了https

## http 2.0
- 二进制传输
- 多路复用 -> 同一个TCP连接可以多个HTTP并行请求
- header压缩
- 服务端推送
