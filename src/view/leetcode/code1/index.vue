<template>
  <div class="leetcode leetcode-code1">
    <h3 class="leetcode-tip">1：两数之和</h3>

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
    // let arr = ["something", "anything", "nothing", "anything"];
    // let index = arr.indexOf("nothing");
    // console.log(index) //结果是2
    console.log(this.twoSum([-1,-2,-3,-4,-5], -8));
  },
  methods: {
    /**
     *
     */
    twoSum(nums, target) {
      let res = [0, 0];

      if (nums.length == 2) {
        if (nums[0] + nums[1] == target) return [0,1];
        return [];
      }

      for (let i=0; i < nums.length; i++) {
        console.log('进去循环',nums[i])
        // if (nums[i] > target) continue;
        const remain = target - nums[i];
        
        const otherNums = nums.indexOf(remain) 
        console.log(remain,otherNums)
        if (otherNums > -1 && otherNums!=i) {
          res[0] = i;
          res[1] = nums.indexOf(remain);

          return res
        }
      }
    },
    /**
     * 方法一：
     * 哈希表（散列表）
     */
    solve(nums, target) {
      let pi = 0;
      let pj = 1;

      while (pi < nums.length) {
        if (nums[pi] + nums[pj] == target) {
          return [pi, pj];
        }

        if (pj < nums.length) {
          pj += 1;
        } else {
          pi += 1;
          pj = pi + 1;
        }
      }

      return [];
    },

    /**
     * 方法二：利用 Map （字典）的数据结构查找
     */

    solve2(nums, target) {
      let map = new Map();
      for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let n2 = target - n;
        if (map.has(n2)) {
          return [map.get(n2), i];
        } else {
          map.set(n, i);
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "@s/leetcode.scss";
</style>
