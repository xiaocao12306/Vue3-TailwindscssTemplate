<template>
  <div class="flex flex-col items-center">
    <van-overlay :show="show" @click="show = false" class="h-screen flex flex-col justify-center items-center">
      <div class=" bg-white rounded-lg p-4 flex flex-col justify-center items-cente" @click.stop>
        <img :src="img" alt="" class="w-50 rounded-lg">
        <p class="text-2xl font-bold text-center text-blue-500">{{name.type}}</p>
      </div>
    </van-overlay>
    <div class="flex justify-center my-4">
      <van-uploader
        :after-read="afterRead"
        name="image"
        :max-size="4 * 1024 * 1024"
        @oversize="onOversize"
        capture="camera"
        class="uploader"
      >
        <van-button type="primary" round class="shadow">拍照识别</van-button>
      </van-uploader>
    </div>
    <van-tabs v-model:active="active" class="w-full p-4">
      <van-tab title="其他垃圾" class="mt-2">
        <div class="relative">
          <p class="">
            其他垃圾（上海称干垃圾）包括除上述几类垃圾之外的砖瓦陶瓷、渣土、卫生间废纸、纸巾等难以回收的废弃物及尘土、食品袋（盒）。采取卫生填埋可有效减少对地下水、地表水、土壤及空气的污染。
          </p>
        </div></van-tab
      >
      <van-tab title="有害垃圾" class="mt-2">
        <div class="relative">
          <van-image
            height="400px"
            src="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/有害垃圾.jpg"
          ></van-image>
          <p
            class="
              absolute
              bottom-0
              bg-opacity-60
              text-white
              bg-black
              p-2
              text-sm
            "
          >
            有害垃圾含有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物。包括电池、荧光灯管、灯泡、水银温度计、油漆桶、部分家电、过期药品及其容器、过期化妆品等。这些垃圾一般使用单独回收或填埋处理。
          </p>
        </div></van-tab
      >
      <van-tab title="可回收垃圾" class="mt-2 text-base">
        <div class="relative">
          <van-image
            height="400px"
            src="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/可回收物.jpg"
          ></van-image>
          <p
            class="
              absolute
              bottom-0
              bg-opacity-60
              text-white
              bg-black
              p-2
              text-sm
            "
          >
            这些垃圾通过综合处理回收利用，可以减少污染，节省资源。如每回收1吨废纸可造好纸850公斤，节省木材300公斤，比等量生产减少污染74%；每回收1吨塑料饮料瓶可获得0.7吨二级原料；每回收1吨废钢铁可炼好钢0.9吨，比用矿石冶炼节约成本47%，减少空气污染75%，减少97%的水污染和固体废物。
          </p>
        </div>
      </van-tab>
      <van-tab title="厨余垃圾" class="mt-2">
        <div class="relative">
          <van-image
            height="400px"
            src="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/厨余垃圾.jpg"
          ></van-image>
          <p
            class="
              absolute
              bottom-0
              bg-opacity-60
              text-white
              bg-black
              p-2
              text-sm
            "
          >
            厨余垃圾（上海称湿垃圾）包括剩菜剩饭、骨头、菜根菜叶、果皮等食品类废物。经生物技术就地处理堆肥，每吨可生产0.6~0.7吨有机肥料。
          </p>
        </div></van-tab
      >
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { spamReco } from '../../http/api'
let params = new FormData()
let img = ref('')
let show = ref(false)
let name = ref({})
const afterRead = (file, detail) => {
  params.append('image', file.file)
  spamReco(params).then((res) => {
    console.log(res)
    img.value = file.content
    show.value = true
    name.value = res
  })
}
</script>

<style>
.van-tabs__line {
  background: royalblue;
}
</style>
