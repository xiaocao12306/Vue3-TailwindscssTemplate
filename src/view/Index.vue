<template>
  <!--容器  -->
  <div>
    <!-- 头部轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in swiperList"
        :key="index"
        class="w-full"
      >
        <van-image :src="item" alt="" class="w-full" />
      </van-swipe-item>
    </van-swipe>
    <div class="m-4 flex justify-center">
      <van-uploader
        :after-read="afterRead"
        name="image"
        :max-size="4 * 1024 * 1024"
        @oversize="onOversize"
        capture="camera"
        class="uploader"
      >
        <van-icon
          name="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/SAO.png"
          size="40"
          class="p-6 rounded-full shadow-xl"
        ></van-icon>
      </van-uploader>
    </div>
    <div>
      <van-grid column-num="2">
        <van-grid-item @click="goTo('有害垃圾')">
          <van-image src="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/有害垃圾.svg" width="80" height="80"></van-image>
        </van-grid-item>
        <van-grid-item @click="goTo('其他垃圾')">
          <van-image src="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/其他垃圾.svg" width="80" height="80"></van-image>
        </van-grid-item>
        <van-grid-item @click="goTo('厨余垃圾')">
          <van-image src="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/厨余垃圾.png" width="80" height="80"></van-image>
        </van-grid-item>
        <van-grid-item @click="goTo('可回收垃圾')">
          <van-image src="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/有害垃圾.svg" width="80" height="80"></van-image>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { P } from '../../dist/assets/vendor.b6e1679d'
import { spamReco } from '../http/api'
const router = useRouter()
// 设置轮播图照片
let swiperList = ref([
  'https://pic.pngbag.com/00/40/08/4a9bc0de5ebb847c.jpg',
  'https://www.jxgkqc.com/upload/202109/07/202109070956113298.jpg',
])

let params = new FormData()
let img = ref('')
let show = ref(false)
let name = ref({})
const afterRead = (file, detail) => {
  params.append('image', file.file)
  spamReco(params).then((res) => {
      console.log(res)
      router.push({name:'scan', params: {...res, img:file.content}})
    })
  }

const goTo = e =>{
  router.push({name:'rubishDetail', params: {type: e}})
}
</script>

<style></style>
