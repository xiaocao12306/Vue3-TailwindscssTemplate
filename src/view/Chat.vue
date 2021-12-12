<template>
  <div class=" p-4">
    <div
      v-for="(item, index) in newsList"
      :key="index"
      class="rounded-lg mb-6 overflow-hidden bg-white shadow"
      @click="goToNewsDetail(item.id)"
    >
      <van-image
        :src="item.cover_picture"
        height="120"
        fit="cover"
        class="w-full"
      />
      <div class="px-4 py-2">
        <p class="text-lg mb-1">{{ item.title }}通知</p>
        <div class="flex flex-row items-center">
          <img src="https://uploadfile.huiyi8.com/up/0c/42/78/0c42780f18828ce25034ab4283d289e9.jpg" alt="" class="rounded-full w-8 h-8" />
          <p class="text-gray-500 ml-2">小曹同学</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { getNewsList } from '../http/api'
import { avatarArr } from '../config'
import { useRouter } from 'vue-router'
const router = useRouter()
let newsList = ref([])
getNewsList().then((res) => (newsList.value = res))

const goToNewsDetail = (id) =>
  router.push({ name: 'newsDetail', params: { id } })
</script>

<style lang="scss" scoped></style>
