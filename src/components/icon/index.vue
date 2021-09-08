<script setup lang="ts">
import { defineProps } from 'vue'
import './index'

const props = defineProps({
    icon: String,
    styles: {
        type: Object,
        default:()=>{},
    }
});

console.log(props)

</script>

<template>
    <svg class="icon" aria-hidden="true"  :style="styles">
        <use :xlink:href="`#${icon}`" />
    </svg>
</template>


<style scoped lang='scss'>
.icon {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
  margin-right: 8px;
}
</style>

