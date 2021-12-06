<template>
  <div class="bg-gray-50 pt-3">
    <div class="flex flex-row items-center p-4 bg-white shadow rounded-xl mb-5 mx-3">
      <van-image :src="user.avatar" round width="100" height="100"></van-image>
      <div class="ml-4 flex flex-col justify-around h-full">
        <p class="text-blue-500 font-bold text-xl">{{ user.username }}</p>
        <p class="text-sm text-gray-500 mt-5">
          总积分：{{ user.answer_count }}
        </p>
      </div>
    </div>
    <van-cell-group class="shadow" inset>
      <van-cell title="个人信息" value="内容" is-link />
      <van-cell title="我的收藏" value="内容" is-link />
      <van-cell title="退出登录" value="内容" is-link />
    </van-cell-group>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { getUser } from '../http/api'

let route = useRouter()
let user = reactive({
  avatar:
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2106223408,2472855119&fm=26&gp=0.jpg',
})

getUser(112).then((res) => {
  Object.assign(user, res)
})
</script>

<style lang="scss" scoped></style>
