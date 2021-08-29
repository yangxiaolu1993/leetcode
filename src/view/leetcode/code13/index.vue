<template>
    <div class="leetcode leetcode-code13">
      <h3 class="leetcode-tip">13：罗马数字转整数</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>题目描述</div>
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
    console.log('==== code 13 =====')
    console.log(this.code13('III'))
  },
  methods: {
    /**
     * leetcode 13:罗马数字转整数
     * 知识点 
     * 例子 输入"MCMXCIV"=>1994  解释 M = 1000, CM = 900, XC = 90, IV = 4.
     */
    code13(s){
        let sum = 0
        let value = {
          'I':1,
          'V':5,
          'X':10,
          'L':50,
          'C':100,
          "D":500,
          "M":1000
        }

        let copy = s.split('')

        for(let i=0;i<copy.length;i++){
          let a = `${copy[i]}${copy[i+1]}`
          
          if(a == 'IV' || a == 'IX' || a == 'XL' || a == 'CD' || a == 'CM' || a == 'XC'){
            sum -= value[copy[i]]
          } else {
            sum += value[copy[i]]
          }
          
        }
        return sum
    },
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
