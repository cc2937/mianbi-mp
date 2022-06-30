<template>
  <view class="punch-list">
    <view class="punch-item">
      <view class="punch-main">
        <image class="punch-author" src="https://tva1.sinaimg.cn/large/e6c9d24egy1h36ok2cgx6j20py0q2jsy.jpg" mode="aspectFill"></image>
        <view class="punch-content">
          <view class="punch-user">
            <view class="punch-nick">小猫</view>
            <view class="punch-status">@ 今天不学习，明天就淘汰</view>
          </view>
          <view class="punch-summary">
            今天的收获是：只看不做是学不会的，看 100 遍都学不会，只有做，不断做，不断思考，不断找老师提问交流得到反馈，才能学会！刘思毅，加油加油加油！！！
          </view>
          <view class="punch-pics">
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
            <view class="punch-pic" style="background-image: url(https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg)"></view>
          </view>
          <view class="punch-toolbar">
            <view class="punch-time">50分钟前</view>
            <view class="punch-more"></view>
          </view>
        </view>
      </view>
      <view class="punch-likes">
        
      </view>
      <view class="punch-reviews">
        
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.punch-list {
  padding: 0 24rpx;
}

.punch-item {
  padding-bottom: 16rpx;
  border-bottom: 1rpx solid #f5f5f5;
  margin-bottom: 16rpx;
}
  
.punch-main {
  display: flex;
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
</style>
