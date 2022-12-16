### 一、Clickoutside.js

- 点击被插入该指令的元素外的任意空白处，触发指令所绑定的方法。

- 使用方法

  ```vue
  <!-- 引入 -->
  import Clickoutside from 'element-ui/src/utils/clickoutside' 
  <!-- 声明指令 -->
  directives: { Clickoutside } 
  <!-- 组件使用 -->
  <div v-clickoutside="handleClickOutside">
  </div>
  ```

### 二、上传附件

```vue
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
      :before-remove="beforeRemove"
    >
      <div class="addIconBox">
        <i class="el-icon-circle-plus addIcon"></i> // 页面要显示部分
      </div>
    </el-upload>
  </div>
</template>

<script>
import { getFileUpload } from '@/api/official'

export default {
  name: 'UploadFiles',
  props: {
    limit: {
      // 可上传文件
      type: Number,
      default: 4,
    },
    showFileList: {
      // 是否显示上传文件列表
      type: Boolean,
      default: true,
    },
    fileType: {
      // 上传文件类型
      type: String,
      default:
        '.docx,.doc,.jpg,.jpeg,.xlsx,.xls,.png,.gif,.zip,.rar,.ppt,.pptx',
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async handChange(file, fileList) {
      let testmsg = file.raw.name.substring(file.raw.name.lastIndexOf('.') + 1)
      const typeArr = [
        file.raw.type ===
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        testmsg === 'doc',
        testmsg === 'docx',
        file.raw.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
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
      const flag = typeArr.some((item) => !!item) //是否含有true
      if (flag) {
        let fd = new FormData()
        fd.append('file', file.raw)
        this.loading = true
        await getFileUpload(fd)
          .then((res) => {
            this.$refs.newupload.submit() // 上传文件
            this.$message.success(`已成功选择${file.raw.name}文件`)
            this.loading = false
          })
          .catch((err) => {
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
      this.$message.warning('只能上传' + this.limit + '个附件')
    },
  },
}
</script>
```

### 三、重置 message 弹窗

```js
/**重置message，防止重复点击重复弹出message弹框 */
import { Message } from 'element-ui'

let messageInstance = null
const resetMessage = (options) => {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Message(options)
}
;['error', 'success', 'info', 'warning'].forEach((type) => {
  resetMessage[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      }
    }
    options.type = type
    return resetMessage(options)
  }
})
export const message = resetMessage
```
