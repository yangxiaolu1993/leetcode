<template>
    <div class="leetcode leetcode-35">
      <h3 class="leetcode-tip">35:合并两个有序链表</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>填写题目描述</div>
      </div>
    </div>
</template>
<script>
export default {
  name: "LeetCode",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    const re = this.init([1,3,5,6],2)
    console.log('斐波那契数列')
    const ser = this.series2(10)
    console.log(ser)
  },
  methods: {
    init(nums,target){
       // 利用二分法解题
      let left = 0;
      let right = nums.length -1
      if(nums[left] > target) return 0
      if(nums[right] < target) return nums.length

      let i = 0

      while(left<=right && i < 10){
          ++i
          if(nums[left] > target) return left
          if(nums[right] < target) return right+1

          const mid = Math.floor((left+right)/2)
          console.log(mid,left,right)

          if(nums[mid] == target) return mid  // 中间值匹配到目标值
          
          if(nums[mid] > target){ // 左侧最高点 大于 目标值，目标值可能在左侧
              right = mid -1
          } else {
              left = mid + 1
          }
        
      }
    },
    // 斐波那契数列
    series(n){
      if(n<2) return 1;

      let dp = [1,1]

      for(let i = 2;i<n;i++){
        dp[i] = dp[i-1] + dp[i-2]
      }

      return dp
    },
    // 斐波那契数列 - 递归思路  缺点：当数值过大时，浏览器容易卡死
    series2(n){
      if(n<=2) return 1;
      return this.series2(n-2)+this.series2(n-1)

    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
