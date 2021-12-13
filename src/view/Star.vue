<template>
  <div>
    <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
      <div v-for="item in rubish" :key="item.image_code">
        <div 
        :class="{
          'flex p-4 rounded-lg shadow-lg m-4 text-white': true,
          'bg-red-400': item.image_type === '有害垃圾',
          'bg-blue-400': item.image_type === '厨余垃圾',
          'bg-green-400': item.image_type === '可回收物',
          'bg-gray-400': item.image_type === '其他垃圾',
        }">
          <div class="ml-4">
            <p class="text-xl font-bold float-left mr-4">{{ item.image_name }}</p>
            <small>{{item.image_type}}</small>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { getGames } from '../http/api'

const handleChange = (e) => {
  console.log(e)
}
let rubish = ref([])

const onLoad = () => {
  for (let i = 0; i <= 3; i++) {
    getGames().then((res) => {
      rubish.value = rubish.value.concat(res.Images)
    })
  }
}
</script>

<style lang="scss" scoped></style>
