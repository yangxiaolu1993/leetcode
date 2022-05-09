<template>
    <div class="leetcode leetcode-21">
      <h3 class="leetcode-tip">21:合并两个有序链表</h3>

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
    // const result = this.init(["flower","flower","flower","flower"])
    // console.log(result)
  },
  methods: {
    init(){
      // let common = []
      // const base = strs[0]
      // for(let i=0;i<base.length;i++){
      //     const co = common.join()+base[i]
      //     const remain = strs.slice(1)
      //     let filterRemain = remain.filter(item=>item.substr(0,co.length) == co)
          
      //     if(filterRemain.length == remain.length){
      //         common.push(base[i])
      //     } else {
      //         break;
      //     }

      // }

      // return common.length?common.join(''):""
      
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
