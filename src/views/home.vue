<script setup lang="ts">
import { ref ,reactive} from 'vue'
import { randomNum } from '@/utils/utils'

const list = reactive([
  {id:'6',title:'创建 demo ',desc:'详情描述 demo 做了哪些事情 ',route:'home',}
])

// 获取可选 icon 图标
const files = ref(Object.keys(import.meta.globEager('/public/img/*')))


</script>

<template>
  <div class="home">
    <div class="home-title"><svg-icon icon='icon-naoling'></svg-icon>菜鸟点燃热情吧 ~</div>
    <div class="group">
        <div class="group-list" v-for="(item,i) in list" :key="i" @click="jump(item)">
            <div class="img"><img :src="files[randomNum(0,files.length-1)]" alt=""></div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>  
        </div>
    </div>

  </div>
</template>

<style>
h1{
  font-size: 24px;
}
</style>
