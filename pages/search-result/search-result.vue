<template>
  <view>
    <view class="result-title">搜索 “{{ keyword }}” 结果</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '',
        results: [],
      }
    },
    onLoad(options) {
      this.keyword = options.keyword
      this.search()
    },
    methods: {
      search() {
        
      },
    }
  }
</script>

<style>

</style>
