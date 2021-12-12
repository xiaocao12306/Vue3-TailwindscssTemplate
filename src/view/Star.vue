<template>
  <div>
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="1">可回收垃圾</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="2">有害垃圾</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const indexList = ref([
  '可回收垃圾',
  '有害垃圾',
  '其他垃圾',
])
</script>

<style lang="scss" scoped></style>
