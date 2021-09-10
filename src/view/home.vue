<template>
  <div class="leetcode">
    <h3 class="title">LeetCode 解题练习</h3>

    <div class="desc">
      数据结构常用的类型：数组、栈、队列、链表、树、图、堆、散列标
    </div>

    <div class="mainList">
      <nut-cell class="table-header" title='题目' desc='难度'></nut-cell>
      <template v-for="(item, index) in list">
        <nut-cell
          :key="index"
          :to="item.route"
        >
        <div slot="title" :class="{'complete':!item.complete}" >
          <svg-icon :icon="item.complete?'icon-wancheng':'icon-maichongpulse1'" :styles="{'color':`${item.complete?'#59910a':''}`}"></svg-icon>{{item.name}}.{{item.desc || '描述文字'}}
        </div>
        <div slot="desc">
          <nut-rate
              :size="10"
              :spacing="2"
              value="0"
              :total="Number(item.difficulty)"
              :readOnly="true"
            >
            </nut-rate>
        </div>
        </nut-cell>
      </template>
    </div>
  </div>
</template>

<script>
import LeetCodeList from "../../createLeetcode/config"
export default {
  name: "LeetCode",
  data() {
    return {
      list: LeetCodeList
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.leetcode {
  padding: 10px;
  .desc {
    margin-top: 10px;
    font-size: 12px;
  }
  .title {
    text-align: center;
  }
  .mainList {
    margin-top: 10px;

    .table-header{
      font-weight: bold;
    }
    .complete{
      color: #f09393;
    }
  }
}
</style>
