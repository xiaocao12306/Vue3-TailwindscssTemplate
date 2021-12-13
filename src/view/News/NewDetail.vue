<template>
  <div class="p-4">
    <p class="text-3xl font-bold mb-4 text-center">{{ news.title }}</p>
    <div class="flex flex-row items-center mb-2">
      <img
        src="https://uploadfile.huiyi8.com/up/0c/42/78/0c42780f18828ce25034ab4283d289e9.jpg"
        alt=""
        class="rounded-full w-8 h-8"
      />
      <p class="ml-2" style="color: #2ac8dd">小曹同学</p>
      <p class="text-gray-500 ml-2">2021-12-12 17:42</p>
    </div>
    <video
      src="../../assets/219512070-1-208.mp4"
      autoplay
      webkit-playsinline="true"
      playsinline="true"
      x5-video-player-type="h5-page"
    ></video>
    <div v-html="news.content"></div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { getNewsDetail } from '../../http/api'
const route = useRoute()
const id = route.params.id
let news = ref({})
getNewsDetail(id).then((res) => {
  news.value = res
})
</script>

<style lang="scss" scoped></style>
