<template>
  <!--容器  -->
  <div>
    <!-- 头部轮播图 -->
    <van-swipe class="my-swipe"
                :autoplay="3000"
                indicator-color="white">
      <van-swipe-item v-for="(item) in swiperList"
                      :key="item.id"
                      class="w-full">
        <van-image :src="item.img"
                    alt=""
                    class="w-full" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item icon="location" icon-color="#1fd59a" text="新闻资讯" @click="goToNewsList"/>
      <van-grid-item icon="share" icon-color="#fc3c4f" text="图片分享" @click="goToShareList"/>
      <van-grid-item icon="bag" icon-color="#3e80fd" text="商品购买" />
      <van-grid-item icon="comment-circle" icon-color="#2bc2f7" text="留言反馈" />
      <van-grid-item icon="video" icon-color="#f95118" text="视频专区" />
      <van-grid-item icon="phone-circle" icon-color="#ff762a" text="联系我们" />
    </van-grid>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { getSwiper } from '../http/api'
const router = useRouter()
// 设置轮播图照片
let swiperList = ref([])

getSwiper().then(res =>{
    swiperList.value = res
})
const goToNewsList = () => {
  router.push('newsList')
}
const goToShareList = () => {
  router.push('shareList')
}
</script>

<style>
</style>