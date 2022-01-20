### 一、Clickoutside.js

* 点击被插入该指令的元素外的任意空白处，触发指令所绑定的方法。

* 使用方法

  ``` vue
  //引入
  import Clickoutside from 'element-ui/src/utils/clickoutside'
  
  //声明指令
  directives: { Clickoutside }
    
  //组件使用
  
  <div v-clickoutside="handleClickOutside">
  </div>
  ```


###  二、上传附件

``` vue
<template>
	<div class="filebox">
		<!--附件-->
		<el-upload
			v-loading="loading"
			class="upload-demo-main"
			ref="newupload"
			action
			:show-file-list="showFileList"
			:on-change="handChange"
			:auto-upload="false"
			:limit="limit"
			:on-exceed="handleExceed"
			:accept="fileType"
			:before-remove="beforeRemove">
			<div class="addIconBox">
				<i class="el-icon-circle-plus addIcon"></i> // 页面要显示部分
			</div>
		</el-upload>
	</div>
</template>

<script>
import { getFileUpload } from '@/api/official'


export default {
	name: "UploadFiles",
	props: {
		limit: { // 可上传文件
			type: Number,
			default: 4
		},
		showFileList: { // 是否显示上传文件列表
			type: Boolean,
			default: true
		},
		fileType: { // 上传文件类型
			type: String,
			default: '.docx,.doc,.jpg,.jpeg,.xlsx,.xls,.png,.gif,.zip,.rar,.ppt,.pptx'
		}
	},
	data() {
		return {
			loading: false,
		}
	},
	methods: {
		async handChange( file, fileList ) {
			let testmsg = file.raw.name.substring(file.raw.name.lastIndexOf('.') + 1)
			const typeArr = [
				file.raw.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				testmsg === 'doc',
				testmsg === 'docx',
				file.raw.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				testmsg === 'xlsx',
				testmsg === 'pdf',
				testmsg === 'zip',
				testmsg === 'rar',
				testmsg === 'xls',
				testmsg === 'png',
				testmsg === 'jpg',
				testmsg === 'jepg',
				testmsg === 'jif',
				testmsg === 'ppt',
				testmsg === 'pptx',
			]
			const flag = typeArr.some(item => item === true) //是否含有true
			if (flag) {
				let fd = new FormData()
				fd.append('file', file.raw)
				this.loading = true
				await getFileUpload(fd).then(res => {
					this.$refs.newupload.submit() // 上传文件
					this.$message.success(`已成功选择${file.raw.name}文件`)
					this.loading = false
				}).catch(err => {
					this.loading = false
					this.$refs.newupload.submit()
					this.$message.error(err)
				})
			} else {
				this.$message.error('上传格式错误')
				return false
			}
		},

		//文件超出个数限制时
		handleExceed() {
			this.$message.warning("只能上传" + this.limit + "个附件")
		},
	},
}
</script>

```

###  三、重置message弹窗

``` js
/**重置message，防止重复点击重复弹出message弹框 */
import { Message } from 'element-ui';

let messageInstance = null;
const resetMessage = ( options ) => {
		if (messageInstance) {
			messageInstance.close()
		}
		messageInstance = Message(options)
	}
;['error', 'success', 'info', 'warning'].forEach(type => {
	resetMessage[type] = options => {
		if (typeof options === 'string') {
			options = {
				message: options
			}
		}
		options.type = type
		return resetMessage(options)
	}
})
export const message = resetMessage
```
### element表头固定
``` js
let listenAction
export default {
  inserted: function(el) {
    const elHead = el.getElementsByClassName('el-table__header-wrapper')[0]
    let elFixed = []
    let elCell = []

    const stickyTop = 50 // navbar 的高度，表头要在它下面
    const elStyle = elHead.style
    const zIndex = 1000

    // 初始化sticky定位
    elStyle.position = '-webkit-sticky'
    elStyle.position = 'sticky'

    // 获取表格距离顶部的高度
    const elTop = el.getBoundingClientRect().top

    // 初始化行内css
    elStyle.cssText = `top: ${stickyTop}px; z-index: ${zIndex}`

    // 是否要处于固定定位
    let active = false

    const getScroll = (target, top) => {
      const prop = top ? 'pageYOffset' : 'pageXOffset'
      const method = top ? 'scrollTop' : 'scrollLeft'
      let ret = target[prop]
      if (typeof ret !== 'number') {
        ret = window.document.documentElement[method]
      }
      return ret
    }

    // 固定定位时处理
    const sticky = () => {
      if (active) {
        return
      }

      // 表格自身的宽高
      const elWidth = el.getBoundingClientRect().width

      elStyle.position = 'fixed'
      elStyle.width = `${elWidth}px`
      elStyle.borderTop = '1px solid #dfe6ec'
      // 去掉fixed效果
      elCell = elHead.querySelectorAll('.is-hidden')
      if (elCell.length > 0) {
        [...elCell].forEach(element => {
          element.classList.remove('is-hidden')
        })
      }

      elFixed = el.querySelectorAll('.el-table__fixed-body-wrapper')
      if (elFixed.length > 0) {
        elFixed.forEach(element => {
          element.classList.add('top0')
        })
      }

      active = true
    }

    // 重置回原来
    const reset = () => {
      if (!active) {
        return
      }

      elStyle.position = ''
      elStyle.borderTop = ''
      elStyle.width = ''

      if (elCell.length > 0) {
        elCell.forEach(element => {
          element.classList.add('is-hidden')
        })
      }
      if (elFixed.length > 0) {
        elFixed.forEach(element => {
          element.classList.remove('top0')
        })
      }
      active = false
    }

    const check = () => {
      const scrollTop = getScroll(window, true)
      const offsetTop = el.getBoundingClientRect().top
      if (offsetTop <= 0) {
        sticky()
      } else {
        if (scrollTop < elTop + stickyTop) {
          reset()
        }
      }
    }

    listenAction = () => {
      check()
    }

    window.addEventListener('scroll', listenAction)
  },

  unbind() {
    window.removeEventListener('scroll', listenAction)
  }
}

```
