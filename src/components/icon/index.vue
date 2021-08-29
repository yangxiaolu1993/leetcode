<template>
  <svg class="icon" aria-hidden="true" @click="$emit('click',$event)" :style="styles">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
import './icon'
export default {
  name: 'svg-icon',
  props: {
    icon: {
      type: String,
      require: true
    },
    styles: {
      type: Object,
      default: ()=>{}
    }
  }
}
</script>

<style lang="scss">
.icon {
  width: 15px;
  height: 15px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
  margin-right: 4px;
}
</style>