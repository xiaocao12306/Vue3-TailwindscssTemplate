<template>
  <!--容器  -->
  <div>
    <!-- 头部轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item,index in swiperList" :key="index" class="w-full">
        <van-image :src="item" alt="" class="w-full" />
      </van-swipe-item>
    </van-swipe>
    <div>
      <div v-for="item in newsList" :key="item.id" @click="goToNewsDetail(item.id)">
        <div class="flex flex-row px-5 pt-5">
          <div class="flex-1 flex flex-col justify-between">
            <p class="font-lg font-bold">{{ item.title }}</p>
            <p class="text-sm van-multi-ellipsis--l2">{{item.content}}</p>
          </div>
          <img :src="item.cover_picture" alt="" class="w-20 h-16 rounded m-2" />
        </div>
        <van-divider />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { getNewsList } from '../http/api'
const router = useRouter()
// 设置轮播图照片
let swiperList = ref(['http://172.18.12.13:8000/static/rubbish_image.png'])

let newsList = ref([])
getNewsList().then(res => newsList.value = res)

const goToNewsDetail = id => router.push({name:'newsDetail', params:{id}})

</script>

<style></style>
