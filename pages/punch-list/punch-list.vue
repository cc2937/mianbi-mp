<template>
  <view class="punch-list">
    <view class="punch-item" v-for="item in punches" :key="item.id">
      <image class="punch-author" :src="item.user.avatar" mode="aspectFill"></image>
      <view class="punch-content">
        <view class="punch-user">
          <view class="punch-nick">{{ item.user.nick }}</view>
          <view class="punch-status" v-if="item.user.status">@ {{ item.user.status }}</view>
        </view>
        <view class="punch-summary">
          {{ item.comtent }}
        </view>
        <view class="punch-pics">
          <view v-for="(pic, picIdx) in item.pics" :key="picIdx" class="punch-pic" :style="`background-image: url(${pic})`"></view>
        </view>
        <view class="punch-toolbar">
          <view class="punch-time">{{ item.createdAt }}</view>
          <view class="punch-more"></view>
        </view>
        
        <view class="punch-likes" v-if="item.likes.length">
          <template v-for="(like, likeIdx) in item.likes" :key="like.id">
            <view class="punch-like">{{ like.nick }}</view>
            <view class="punch-like-sep" v-if="likeIdx != item.likes.length - 1">,</view>
          </template>
        </view>
        <view class="punch-reviews">
          <view class="punch-review" v-for="review in item.reviews" :key="review.id">
            <view class="punch-review-user">{{ review.user.nick }}</view>：
            <view class="punch-review-content">{{ review.content }}</view>
          </view>
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import { getPunches } from '@/api/punch.js'
  
  export default {
    data() {
      return {
        query: {
          page: 1,
          perPage: 2,
        },
        total: 0,
        punches: [],
      }
    },
    onLoad() {
      this.getPunches()
    },
    onReachBottom() {
      this.getPunches()
    },
    methods: {
      async getPunches() {
        const res = await getPunches(this.query)
        this.punches.push(...res.data.data)
        this.total = res.data.total
        this.query.page++
      },
    }
  }
</script>

<style scoped>
.punch-list {
  padding: 0 24rpx;
}

.punch-item {
  display: flex;
  padding-bottom: 16rpx;
  border-bottom: 1rpx solid #f5f5f5;
  margin-bottom: 16rpx;
}
  
.punch-author {
  width: 100rpx;
  height: 100rpx;
  flex-shrink: 0;
  margin-right: 16rpx;
  border-radius: 8rpx;
}

.punch-content {
  flex-grow: 1;
}

.punch-user {
  font-weight: 500;
  font-size: 28rpx;
  display: flex;
  align-items: center;
}

.punch-nick {
  color: #5b6b92;
}

.punch-status {
  margin-left: 16rpx;
  color: #999;
}

.punch-summary {
  font-size: 28rpx;
  margin-top: 8rpx;
}

.punch-pics {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16rpx;
}

.punch-pic {
  width: calc((100% - 8rpx * 2) / 3);
  height: 0;
  padding-bottom: calc((100% - 8rpx * 2) / 3);
  margin: 0 8rpx 8rpx 0;
  background-size: cover;
  background-position: center;
}

.punch-pic:nth-child(3n) {
  margin-right: 0;
}

.punch-toolbar {
  margin-top: 8rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.punch-time {
  font-size: 24rpx;
  color: #bbb;
  margin-top: 8rpx;
}

.punch-more {
  width: 50rpx;
  height: 32rpx;
  border-radius: 8rpx;
  background-color: #f0f0f0;
  background-image: url(/static/more.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 28rpx;
  position: relative;
}

.punch-likes {
  background-color: #f7f7f7;
  background-image: url(/static/heart.png);
  background-repeat: no-repeat;
  background-position: 14rpx 16rpx;
  background-size: 30rpx;
  padding-left: 16rpx;
  padding-top: 8rpx;
  text-indent: 36rpx;
  line-height: 40rpx;
  font-size: 26rpx;
  margin-top: 16rpx;
}

.punch-like {
  display: inline-block;
  text-indent: 0;
  color: #5b6b92;
}

.punch-like-sep {
  display: inline-block;
  text-indent: 0;
  margin-right: 8rpx;
}

.punch-reviews {
  background-color: #f7f7f7;
  line-height: 40rpx;
  font-size: 26rpx;
  padding: 8rpx 16rpx;
}

.punch-review-user {
  display: inline-block;
  color: #5b6b92;
}

.punch-review-content {
  display: inline-block;
}
</style>
