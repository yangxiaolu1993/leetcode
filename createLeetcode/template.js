var nameLc = 'test';
var demoModel = function (answer) {
  var temp = {
    vue: `<template>
    <div class="leetcode leetcode-${answer.title}">
      <h3 class="leetcode-tip">${answer.name}:${answer.desc}</h3>

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
  mounted() {},
  methods: {
    
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
`
};

  return temp;
};
module.exports = demoModel;
