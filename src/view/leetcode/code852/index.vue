<template>
    <div class="leetcode leetcode-code852">
      <h3 class="leetcode-tip">852：山脉数组的峰顶索引</h3>

      <div class="lc-chunk">
        <div class="chunk-title">知识点</div>
        <div>二分法查找</div>
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
    let arr = [0,2,3,4,6,4,3,2]
    console.log(this.code852(arr))
  },
  methods: {
    /**
     * leetcode 852:山脉数组的峰顶索引
     * 知识点 二分法查找
     */
    code852(arr){
      // let caps = []

      // for(let i = 1;i<arr.length-1;i++){
      //   if(arr[i-1] < arr[i] && arr[i] > arr[i+1]){
      //     caps.push(i)
      //   }
      // }
      // if(caps.length == 1) return caps[0]

      let tag = 0,left = 1,right = arr.length-2;

      while(left <= right ){
          let mid = ~~((left + right)/2)
          if(arr[mid] > arr[mid + 1]){
              tag = mid
              right = mid - 1
          } else {
              left = mid + 1
          }
      }

      return tag
    },
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
