<template>
  <view class="punch-create">
    <textarea class="punch-content" v-model="punch.contentn" placeholder="请尽可能详尽描述今天学到了什么, 回顾和总结"></textarea>
    <uni-file-picker
      v-model="punch.pics"
      title="我的今日战果"
      @select="handleSelect"
    >
    </uni-file-picker>
    <button class="punch-btn" type="default" @click="submit">打卡</button>
  </view>
</template>

<script>
  import { upload } from '@/api/file.js'
  import { createPunch } from '@/api/punch.js'
  
  export default {
    data() {
      return {
        punch: {
          content: '',
          pics: [
          ],
        },
      }
    },
    onLoad(options) {
      const urls = options.urls ? JSON.parse(options.urls) : []
      this.punch.pics = urls.map(url => ({ url }))
    },
    methods: {
      handleSelect({ tempFilePaths }) {
        const promises = tempFilePaths.map(path => upload(path))
        Promise.all(promises).then((results) => {
          const urls = results
            .map(res => ({ url: JSON.parse(res.data).url }))
          this.punch.pics.push(...urls)
        })
      },
      submit() {
        createPunch({
          ...this.punch,
          pics: this.punch.pics.map(item => item.url),
        }).then(() => {
          uni.navigateBack()
        })
      },
    }
  }
</script>

<style scoped>
.punch-create {
  padding: 0 24rpx;
}

.punch-content {
  display: block;
  width: 100%;
}

.punch-btn {
  position: fixed;
  bottom: 24rpx;
  left: 24rpx;
  right: 24rpx;
  background-color: #ffd74b;
}
</style>
