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
    
    <view class="tabs">
      <uni-segmented-control :current="active" :values="tabs" styleType="text" @clickItem="handleTabClick" activeColor="#f9d965"></uni-segmented-control>
      <view class="tabs-content">
        <view v-if="active === 0">
          <view class="course" v-for="course in courses" :key="course.id">
            <image class="course-pic" :src="course.pic" mode="aspectFill"></image>
            <view class="course-title">{{ course.title }}</view>
          </view>
          <view class="list-tip" :style="{ display: courseLoading ? 'block' : 'none' }">加载中……</view>
          <view class="list-tip" :style="{ display: courseHasMore ? 'none' : 'block' }">没有更多了</view>
        </view>
        <view v-if="active === 1">笔记列表</view>
        <view v-if="active === 2">面试题列表</view>
      </view>
    </view>
  </view>
</template>

<script>
  import { getBanners } from '@/api/banner.js'
  import { getCourses } from '@/api/course.js'
  
  export default {
    data() {
      return {
        q: '',
        banners: [],
        active: 0,
        tabs: ['课程', '笔记', '面试题'],
        courseQuery: {
          page: 1,
          perPage: 4,
        },
        courses: [],
        courseTotal: 0,
        courseLoading: false,
        courseHasMore: true,
      }
    },
    onLoad() {
      this.getBanners()
      this.getCourses()
    },
    onReachBottom() {
      this.getCourses()
    },
    methods: {
      async getBanners() {
        const res = await getBanners()
        this.banners = res.data
      },
      async getCourses() {
        if (!this.courseHasMore) return
        this.courseLoading = true
        const res = await getCourses(this.courseQuery)
        this.courseLoading = false
        this.courses.push(...res.data.data)
        this.courseTotal = res.data.total
        this.courseQuery.page++
        const maxPage = Math.ceil(this.courseTotal / this.courseQuery.perPage)
        this.courseHasMore = this.courseQuery.page <= maxPage
      },
      handleTabClick(e) {
        this.active = e.currentIndex
      },
    },
  }
</script>

<style scoped>
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

.tabs {
  padding: 0 24rpx;
  margin-top: 8rpx;
}

.tabs /deep/ .segmented-control__item {
  flex: initial;
  padding: 0 24rpx;
}

.tabs /deep/ .segmented-control__item:first-child {
  padding-left: 0;
}

.tabs-content {
  margin-top: 16rpx;
}

.course {
  display: flex;
  margin-bottom: 16rpx;
}

.course-pic {
  width: 170rpx;
  height: 250rpx;
  margin-right: 24rpx;
}

.course-title {
  font-size: 28rpx;
  color: #333;
}

.list-tip {
  font-size: 24rpx;
  color: #999;
  text-align: center;
  display: none;
}

.list-tip {
  font-size: 26rpx;
  color: #ccc;
  text-align: center;
  padding: 24rpx 0;
}
</style>
