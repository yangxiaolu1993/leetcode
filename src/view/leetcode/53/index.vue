<template>
    <div class="leetcode leetcode-53">
      <h3 class="leetcode-tip">53:最大子数组和</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>填写题目描述 [-2,1,-3,4,-1,2,1,-5,4]</div>
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
    console.log(this.init([-2,1,-3,4,-1,2,1,-5,4]))
  },
  methods: {
    init(nums){
      if(nums.length == 0) return 0
      if(nums.length == 1) return nums[1]

      let  res = 0;
      for(let x = 1;x<nums.length;x++){
          console.log('循环',x)
          let temp = x
          let max = 0 // 对别的最大值
          let dp = 0 // 上一个 k 的和

          for(let i = temp;i<nums.length;i++){
           
              if(dp + nums[i] > 0){
                  if(nums[i]>0){
                      max = Math.max(max,dp + nums[i])
                  } 

              } 
              dp = dp + nums[i]
          }

          console.log('子循环最大值',max)
          res = Math.max(res,max)

      }
      
      return res
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
