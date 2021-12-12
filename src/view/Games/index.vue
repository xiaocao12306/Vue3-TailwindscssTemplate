<template>
  <div class="container p-5 flex flex-col items-center">
    <div class="w-full">
      <ul class="w-full">
        <li v-for="(item, index) in rank" :key="index" class="flex justify-around w-full items-center">
          <van-image :src="avatarArr[index]" round width="50" height="50"></van-image>
          <p class="text-lg">{{item.username}}</p>
          <p :class="{'text-cyan font-bold text-lg': index < 3 }">{{item.answer_count}}</p>
        </li>
      </ul>
    </div>
    <div class="mt-20 w-full p-10">
      <van-button type="primary" size="large" to="game" color="#2ac8dd">开始答题</van-button>
    </div>
  </div>
</template>

<script setup>
import { reactive,ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { getUser, rankList } from '../../http/api'
import { avatarArr } from '../../config'
let route = useRouter()
let user = reactive({
  avatar: localStorage.getItem('avatar'),
  username:null
})
let rank = ref([])
rankList().then(res => rank.value = res.Count_Sort)
getUser(localStorage.getItem('userid')).then((res) => {
    Object.assign(user, res)
})

</script>

<style lang="scss" scoped></style>
