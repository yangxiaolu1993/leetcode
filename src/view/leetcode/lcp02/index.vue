<template>
    <div class="leetcode leetcode-LCP02">
      <h3 class="leetcode-tip">LCP02:分式化简</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>填写题目描述</div>
        <div class="chunk-title">示例</div>
        <div>

          输入：cont = [3, 2, 0, 2]  <br/>
          输出：[13, 4] <br/>
          解释：原连分数等价于3 + (1 / (2 + (1 / (0 + 1 / 2))))。注意[26, 8], [-13, -4]都不是正确答案。<br/>
        </div>
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
    this.solve([3,2,0,2])
  },
  methods: {
    solve(cont){
      let num = [1,0] // num[0] 分子  num[1] 分母 
      for(let i=cont.length;i>0;i--){
        num = [num[1],num[0]]
        num = [cont[i-1]*num[1]+num[0],num[1]]
        return num
      }
      
      
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
