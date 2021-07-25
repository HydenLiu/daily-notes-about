## vue中使用websocket

``` js
export default {
    data(){
        return {
            ws: null
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        itit(){
			if (typeof (WebSocket) === "undefined") {
				// this.$message.error("你的浏览器不支持websocket，无法获取消息，请升级浏览器或者换其他浏览器")
				return
			}
			this.ws = new WebSocket(`ws://...`)
			// 监听socket连接
			this.ws.onopen = this.open
			// 监听socket错误信息
			this.ws.onerror = this.error
			// 监听socket消息
			this.ws.onmessage = this.getMessage
        },
        open() {
			console.log("socket连接成功")
		},
		error() {
			console.log("连接错误")
		},
		getMessage( msg ) {
			console.log(msg); // 服务器消息
		},
		send(val) {
			this.ws.send(val) // 向服务器发送数据
		},
		close() {
			console.log("socket已经关闭")
		},
    },
    destroyed() {
		this.ws.onclose = this.close
	}
}
```

