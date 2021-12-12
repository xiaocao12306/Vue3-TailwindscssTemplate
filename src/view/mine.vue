<template>
  <div class="bg-gray-50 pt-3">
    <div class="flex flex-row items-center p-4 bg-white shadow rounded-xl mb-5 mx-3" @click="goToLogin">
      <van-image :src="user.avatar" round width="100" height="100"></van-image>
      <div class="ml-4 flex flex-col justify-around h-full">
        <p class="text-blue-500 font-bold text-xl">{{ user.username }}</p>
        <p class="text-sm text-gray-500 mt-5">
          总积分：{{ user.answer_count }}
        </p>
      </div>
    </div>
    <van-cell-group class="shadow" inset>
      <van-cell title="个人信息" is-link to="personal"  icon="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/check.png"/>
      <van-cell title="我的收藏" to="star" is-link icon="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/heart.png" />
      <van-cell title="退出登录" is-link icon="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/delete.png" @click="logOut"/>
    </van-cell-group>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { getUser } from '../http/api'
import { avatarArr } from '../config'
let router = useRouter()
localStorage.setItem('avatar',avatarArr[parseInt(Math.random(4))])
let user = reactive({
  avatar: localStorage.getItem('avatar'),
  username:'点击登录'
})
let goToLogin = () => {}
let logOut = () => {}
const id = localStorage.getItem('userid')
if(id) {
  getUser(id).then((res) => {
    Object.assign(user, res)
  })
    logOut = () => {
    console.log('logout')
    localStorage.removeItem('userid')
    user.username = '点击登录'
  }
}else{
  goToLogin = () => {
    router.push('login')
  }
}
</script>

<style lang="scss" scoped></style>
