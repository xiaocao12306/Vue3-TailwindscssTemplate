<template>
  <div class=" pt-3">
    <div class="flex flex-row items-center py-4 px-10 mb-5 mx-3" @click="goToLogin">
      <van-image :src="user.avatar" round width="100" height="100" class="shadow-lg"></van-image>
      <div class="ml-10 flex flex-col justify-around h-full">
        <p class="text-2xl">{{ user.username }}</p>
        <p class="mt-2 text-cyan font-bold">
          总积分：{{ user.answer_count }}
        </p>
      </div>
    </div>
    <div class="p-14">
      <div v-for="(item,index) in menu " :key="index" class=" shadow-lg p-4 rounded-xl mb-8">
        <router-link :to="item.path" class="flex justify-center items-center" v-if="item.path !== '#'">
          <van-icon :name="item.icon" :color="item.color" size="24"></van-icon>
          <p class="ml-5">{{item.value}}</p>
        </router-link>
        <div v-else class="flex justify-center items-center" @click="logOut">
          <van-icon :name="item.icon" :color="item.color" size="24"></van-icon>
          <p class="ml-5">{{item.value}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { getUser } from '../http/api'
import { avatarArr } from '../config'
let router = useRouter()
localStorage.setItem('avatar',avatarArr[parseInt(Math.random(4))])
let user = reactive({
  avatar: localStorage.getItem('avatar'),
  username:'点击登录'
})
const menu = ref([
  {value:'我的收藏', icon:'star-o', color:'#0b2d64', path:'/star'},
  {value:'个人信息', icon:'user-o', color:'#7ecdb6', path:'/personal'},
  {value:'分类科普', icon:'apps-o', color:'#576d93', path:'/WikiPersonal'},
  {value:'退出登录', icon:'guide-o', color:'#ff531a', path:'#'},
])
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
