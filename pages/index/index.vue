<template>
  <view>
    <view class="navbar">
      <image class="logo" src="../../static/logo.png" mode="aspectFit"></image>
      <view class="search">
        <input class="search-input" type="text" v-model="q" placeholder="搜索课程/笔记/面试题">
      </view>
      <navigator class="login" url="/pages/login/login">注册/登录</navigator>
    </view>
    
    <swiper class="swiper" circular autoplay :interval="3000" indicator-dots>
      <swiper-item v-for="banner in banners" :key="banner.id">
        <image class="swiper-img" :src="banner.url" mode="aspectFill"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  import { getBanners } from '@/api/banner.js'
  
  export default {
    data() {
      return {
        q: '',
        banners: [],
      }
    },
    onLoad() {
      this.getBanners()
    },
    methods: {
      async getBanners() {
        const res = await getBanners()
        this.banners = res.data
      },
    },
  }
</script>

<style>
.navbar {
  height: 80rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24rpx;
}

.logo {
  width: 60rpx;
  height: 60rpx;
  flex-shrink: 0;
}

.search {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding-left: 72rpx;
  background-image: url(/static/search.png);
  background-repeat: no-repeat;
  background-position: 16rpx center;
  background-size: 40rpx;
  border-radius: 999rpx;
  height: 60rpx;
  margin: 0 24rpx;
  flex-grow: 1;
}

.search-input {
  font-size: 24rpx;
  width: 100%;
  height: 100%;
}

.login {
  font-size: 28rpx;
  color: #333;
  flex-shrink: 0;
}

.swiper {
  margin: 8rpx 24rpx 0;
  height: 250rpx;
}

.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
