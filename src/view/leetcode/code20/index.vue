
<template>
  <div class="leetcode leetcode-code20">

    <h3 class="leetcode-tip">20：有效括号</h3>

    <div class="lc-chunk">
      <div class="chunk-title">描述</div>
      <div>给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s，判断字符串是否有效。 有效字符串需满足：左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。</div>
    </div>
  </div>
</template>
<script>
import { margeArray } from "./demo";
export default {
  name: "LeetCode",
  data() {
    return {
      scoreMap: [],
    };
  },
  mounted() {
    /**
     * 合并２个数组相同的数据，代码在 demo.js 中
     */
    // margeArray()

    let s = "()[]{}";
    console.log(this.solve1("([}}])"));
  },
  methods: {
    /**
     * 方法一：利用栈的知识点实现
     */
    solve1(s) {
      if (s.length % 2 == 1) return false;
      let stock = [];

      for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
          stock.push(s[i]);
        } else {
          const last = stock[stock.length - 1];
          if (
            (s[i] == ")" && last == "(") ||
            (s[i] == "}" && last == "{") ||
            (s[i] == "]" && last == "[")
          ) {
            stock.pop();
          } else {
            return false;
          }
        }
      }

      return stock.length == 0;
    },

    /**
     * 方法二：利用 Map 结构将方法一的代码进行优化
     *
     * Map 是数据结构中字典的变形，Map 是以 [键，值] 对的形式进行数据存储
     *
     */
    solve2() {
      if (s.length % 2 == 1) return false;

      let stock = [];

      let map = new Map();
      map.set("(", ")");
      map.set("{", "}");
      map.set("[", "]");

      for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
          stock.push(s[i]);
        } else {
          if (map.get(stock[stock.length - 1]) == s[i]) {
            stock.pop();
          } else {
            return false;
          }
        }
      }

      return stock.length == 0;
    },
  },
};
</script>
  
<style lang="scss">
@import '@s/leetcode.scss';
</style>
  