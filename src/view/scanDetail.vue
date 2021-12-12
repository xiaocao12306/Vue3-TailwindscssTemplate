<template>
  <div>
    <img :src="about.result.img" alt="">
    <div class="p-4">
      <p class="font-bold text-4xl mr-3 float-left">{{about.result.name}}</p>
      <van-tag :color="about.color" size="large">{{about.result.type}}</van-tag>
    </div>
    <div class="mt-5 p-4">
      <div class="flex items-center mb-2">
        <span class="w-4 h-4 rounded-full block" :style="'background:'+ about.color"></span>
        <p class="ml-4 text-gray-500">相关知识</p>
      </div>
      <p>{{about.content}}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';
import { aboutRubish, HOST } from '../config';
const route = useRoute()
const router = useRouter()
console.log(aboutRubish())
const scanResult = route.params
let about = reactive({
  result: scanResult,
  content: aboutRubish().get(scanResult.type),
  color:switchColor(scanResult.type)
})

function switchColor(type) {
  let color = null
  switch(type){
    case '可回收物': color =  '#337d56'
      break;
    case '有害垃圾' : color =  '#ce3b3b'
      break;
    case '厨余垃圾': color =  '#2c80c5'
      break;
    case '其他垃圾': color =  '#f4ad57'
      break;
  }

  return color
}
</script>

<style lang="scss" scoped>

</style>