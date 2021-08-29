<template>
    <div class="leetcode leetcode-code26">
      <h3 class="leetcode-tip">26：删除有序数组中的重复项</h3>

      <div class="lc-chunk">
        <div class="chunk-title">知识点</div>
        <div>双指针</div>
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
    let nums = [1,1,2]
    let len = this.solve(nums)
    console.log(len)
  },
  methods: {
    /**
     * leetcode 26:删除有序数组中的重复项
     * 结题思路：双指针
     */
    solve(nums){
      if(nums.length == 0|| nums.length == 1) return nums.length

      let pi = 0
      let pj = 0
      while(pj < nums.length){
        console.log(nums[pi],nums[pj])
        if(nums[pi] != nums[pj]){
          pi += 1
          nums[pi] = nums[pj] 
        } 
        pj += 1
      }


      return pi+1
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
