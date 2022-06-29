<template>
  <view>
    <uni-search-bar @confirm="search" v-model="value" focus />
    <view class="history-container" v-if="keywords.length">
      <view class="history-title">搜索历史</view>
      <view class="history">
        <view class="history-item" v-for="word in keywords" :key="word">
          {{ word }}
        </view>
      </view>
      <view class="history-clear" @click="clear">清空搜索历史</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        keywords: [],
        value: '',
      }
    },
    onLoad() {
      this.restore()
    },
    methods: {
      restore() {
        this.keywords = uni.getStorageSync('searchHistory') || []
      },
      search({ value }) {
        if (this.keywords.includes(value)) return
        this.keywords.push(value)
        uni.setStorageSync('searchHistory', this.keywords)
        this.value = ''
        uni.navigateTo({
          url: `/pages/search-result/search-result?keyword=${value}`,
        })
      },
      clear() {
        this.keywords = []
        uni.removeStorageSync('searchHistory')
      },
    }
  }
</script>

<style>
.history-container {
  margin-top: 16rpx;
  padding: 0 24rpx;
}
  
.history-title {
  margin-bottom: 16rpx;
  font-size: 30rpx;
}

.history {
  display: flex;
  flex-wrap: wrap;
  font-size: 26rpx;
  margin-right: -24rpx;
}

.history-item {
  flex-shrink: 0;
  margin: 0 24rpx 24rpx 0;
  padding: 4rpx 8rpx;
  border: 1px solid #ccc;
  border-radius: 8rpx;
}

.history-clear {
  margin-top: 24rpx;
  text-align: center;
  font-size: 26rpx;
  color: #666;
}
</style>
