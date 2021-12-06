<template>
  <div class="h-screen">
    <van-nav-bar
      v-if="isNav"
      :title="title"
      :fixed="true"
      :placeholder="true"
    />
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      v-else
      :fixed="true"
      :placeholder="true"
    />
    <transition :name="transitionName">
      <router-view class="warp"></router-view>
    </transition>
    <!-- 底部导航栏 -->
    <van-tabbar
      v-model="active"
      @change="onChange"
      :placeholder="true"
      v-if="isNav"
    >
      <van-tabbar-item name="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="/gameIndex" icon="apps-o">小游戏</van-tabbar-item>
      <van-tabbar-item name="/wiki" icon="cart-o">垃圾百科</van-tabbar-item>
      <van-tabbar-item name="/mine" icon="user-circle-o"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
// 导入useroute函数
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'

// 声明router函数
const route = useRoute()
const router = useRouter()

let title = ref(route.meta.title)
// 声明active
let active = ref(route.path)
// 判断是否首页页面
let isNav = ref(route.meta.index == 1)
let transitionName = ref('van-slide-right')
// 监听切换事件
const onChange = () => {
  // 切换首页路由
  router.push(active.value)
}
// 监听路由切换事件
onBeforeRouteUpdate((to,from) => {
  // 切换路由之后获取页面名称，然后修改顶部导航栏title
  title.value = to.meta.title
  active.value = to.path
  isNav.value = to.meta.index === 1
})

router.beforeEach((to, from) => {
  transitionName.value = to.meta.index < from.meta.index ? 'van-slide-right' : 'van-silde-left'
})
const onClickLeft = () => {
  router.back()
}
</script>

<style scoped>
.warp {
  height: calc(100% - 100px);
}
</style>
