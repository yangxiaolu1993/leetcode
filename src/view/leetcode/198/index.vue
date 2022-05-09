<template>
    <div class="leetcode leetcode-198">
      <h3 class="leetcode-tip">198:打家劫舍</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>填写题目描述:利用动态规划</div>
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
    console.log(this.rob([2,1,1,2]))
  },
  methods: {
    rob (nums) {
      // 动态规划
      if(nums.length == 1) return nums[0]
      if(nums.length == 2) return Math.max(nums[0],nums[1])

      let dp = [nums[0],Math.max(nums[0],nums[1])] // 金额最大值

      for(let i = 2;i<nums.length;i++){
          dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
      }
      return dp[nums.length-1]
    },

    // 将 nums 分为 奇数与偶数， 奇数与偶数分别之和最大值 . 这种方式是错误的：[2,1,1,2] 最大值为4
    rob2 (nums) {
    
      let odd = 0 // 奇数
      let even = 0 // 偶数

      nums.forEach((num,i) => {
        if(i % 2 == 0){
          even += num
        } else{
          odd += num
        }
      });

      return Math.max(even,odd)
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
