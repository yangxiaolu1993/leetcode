<template>
    <div class="leetcode leetcode-104">
      <h3 class="leetcode-tip">104:二叉树的最大深度</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>给定一个二叉树，找出其最大深度。<br/>二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'LeetCode',
  data() {
    return {
      data: []
    }
  },
  mounted() {
    const tree = [3, 9, 20, null, null, 15, 7]
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
