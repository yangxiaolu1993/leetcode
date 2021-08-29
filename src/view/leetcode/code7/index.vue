<template>
    <div class="leetcode leetcode-code7">
      
      <h3 class="leetcode-tip">7：整数反转</h3>

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
    console.log(this.code7(123))
  },
  methods: {
    /**
     * leetcode 7:整数反转
     * 知识点：按位取反 2个关键操作：
     * 1、 ~-1 ==> 0 ,在使用 indexOf 查找字符串时，可以通过 if(~str.indexof('a)){}
     * 2、使用 ~~ 代替 Math.floor() 向下取整 ，~~的运行速度要快很多
     */
    code7(x){
      let rev = 0;
      while (x !== 0) {
          const digit = x % 10;
          
          x = ~~(x / 10);
          rev = rev * 10 + digit;
          if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
              return 0;
          }
      }
      return rev;

    },
    code7_self(x){
      let rev = Math.abs(x)

      let f = x<0?1:-1

      let revs = Number(rev.toString().split('').reverse().join(''))

      if(revs>Math.pow(2, 31)-1) return 0

      return (-1)*f*revs
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
