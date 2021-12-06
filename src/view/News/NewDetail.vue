<template>
  <div>
    <img :src="news.cover_picture" alt="">
    <p class="p-5 text-xl font-bold">{{news.title}}</p>
    <div v-html="news.content"  class="px-5 "></div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { getNewsDetail } from "../../http/api";
const route = useRoute()
const id = route.params.id
let news = ref({})
getNewsDetail(id).then(res => {
  news.value = res
})
</script>

<style lang="scss" scoped>

</style>