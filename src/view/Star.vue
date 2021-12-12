<template>
  <div>
    <van-tabs v-model:active="active" sticky @change="handleChange">
      <van-tab title="可回收物">
        <div v-for="item in rubish.recycled" :key="item.image_code">
          <div class="flex px-4 py-1">
            <van-image
              :src="item.image_path"
              width="80"
              height="80"
            ></van-image>
            <div class="ml-4">
              <p class="text-xl font-bold">{{ item.image_name }}</p>
              <van-tag color="#337d56">{{ item.image_type }}</van-tag>
            </div>
          </div>
          <van-divider></van-divider>
        </div>
      </van-tab>
      <van-tab title="有害垃圾">
        <div v-for="item in rubish.harmful" :key="item.image_code">
          <div class="flex px-4 py-1">
            <van-image
              :src="item.image_path"
              width="80"
              height="80"
            ></van-image>
            <div class="ml-4">
              <p class="text-xl font-bold">{{ item.image_name }}</p>
              <van-tag color="#ce3b3b">{{ item.image_type }}</van-tag>
            </div>
          </div>
          <van-divider></van-divider></div
      ></van-tab>
      <van-tab title="厨余垃圾">
        <div v-for="item in rubish.kitchen" :key="item.image_code">
          <div class="flex px-4 py-1">
            <van-image
              :src="item.image_path"
              width="80"
              height="80"
            ></van-image>
            <div class="ml-4">
              <p class="text-xl font-bold">{{ item.image_name }}</p>
              <van-tag color="#2c80c5">{{ item.image_type }}</van-tag>
            </div>
          </div>
          <van-divider></van-divider></div
      ></van-tab>
      <van-tab title="其他垃圾">
        <div v-for="item in rubish.other" :key="item.image_code">
          <div class="flex px-4 py-1">
            <van-image
              :src="item.image_path"
              width="80"
              height="80"
            ></van-image>
            <div class="ml-4">
              <p class="text-xl font-bold">{{ item.image_name }}</p>
              <van-tag color="#f4ad57">{{ item.image_type }}</van-tag>
            </div>
          </div>
          <van-divider></van-divider></div
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { getGames } from '../http/api'

const handleChange = (e) => {
  console.log(e)
}
let rubish = reactive({
  recycled: [],
  harmful: [],
  other: [],
  kitchen: [],
})

for (let i = 0; i <= 3; i++) {
  getGames().then((res) => {
    const { Images: result } = res
    rubish.recycled = rubish.recycled.concat(
      result.filter((item) => item.image_type === '可回收物')
    )
    rubish.harmful = rubish.harmful.concat(
      result.filter((item) => item.image_type === '有害垃圾')
    )
    rubish.other = rubish.other.concat(
      result.filter((item) => item.image_type === '其他垃圾')
    )
    rubish.kitchen = rubish.kitchen.concat(
      result.filter((item) => item.image_type === '厨余垃圾')
    )
  })
}
</script>

<style lang="scss" scoped></style>
