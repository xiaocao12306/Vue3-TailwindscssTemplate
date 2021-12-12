<template>
  <div class="container p-5 flex flex-col items-center">
    <van-image :src="user.avatar" width="140" height="140" round></van-image>
    <p class="text-blue-400 text-2xl font-semibold font-sans p-5">
      积分：{{ user.answer_count }}
    </p>
    <div class="mt-20 w-full p-10">
      <van-button round type="primary" size="large" to="game">开始答题</van-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { getUser } from '../../http/api'

let route = useRouter()
let user = reactive({
  avatar: localStorage.getItem('avatar'),
  username:null
})

getUser(localStorage.getItem('userid')).then((res) => {
    Object.assign(user, res)
})

</script>

<style lang="scss" scoped></style>
