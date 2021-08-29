<template>
  <div class="leetcode leetcode-code3">
    <h3 class="leetcode-tip">3：无重复字符的最长子串</h3>

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
    let s = "pwwkew";
    let s1 = "tmmzuxt";
    let s2 = "bbtablud";
    console.log(this.solve(s1));
  },
  methods: {
    /**
     * 方法一：利用 Map 数据格式
     */
    solve(s) {
      if (!s) return 0;
      let map = new Map();
      let start = 0;
      let l = 0;
      for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= start) {
          start = map.get(s[i]) + 1;
        }
        let n = i - start + 1;
        if (n > l) l = n;
        map.set(s[i], i);
      }

      return l;
    },
  },
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
