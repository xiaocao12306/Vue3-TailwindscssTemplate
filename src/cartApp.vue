<template>
  <div class="h-screen">
    <van-nav-bar
      v-if="isNav"
      class="relative"
      :title="title"
      :fixed="true"
      :placeholder="true"
    >
      <template #left>
        <nav :class="{ active: isActive, 'absolute left-0': true }" id="nav">
          <ul>
            <li @click="goTo('/')" :class="{ 'text-blue-500': active === '/' }">
              首页
            </li>
            <li
              @click="goTo('/gameIndex')"
              :class="{ 'text-blue-500': active === '/gameIndex' }"
            >
              小游戏
            </li>
            <li
              @click="goTo('/wiki')"
              :class="{ 'text-blue-500': active === '/wiki' }"
            >
              百科
            </li>
            <li
              @click="goTo('/mine')"
              :class="{ 'text-blue-500': active === '/mine' }"
            >
              个人
            </li>
          </ul>
          <button class="icon" id="toggle" @click="clickNav">
            <div class="line line1"></div>
            <div class="line line2"></div>
          </button>
        </nav>
      </template>
    </van-nav-bar>
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
      <van-tabbar-item
        name="/"
        :icon="
          active === '/'
            ? 'https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/home.png'
            : 'https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/home-1.png'
        "
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        name="/gameIndex"
        :icon="
          active === '/gameIndex'
            ? 'https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/bowl.png'
            : 'https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/bowl-1.png'
        "
        >小游戏</van-tabbar-item
      >
      <van-tabbar-item
        name="/wiki"
        :icon="
          active === '/wiki'
            ? 'https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/book.png'
            : 'https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/book-1.png'
        "
        >垃圾百科</van-tabbar-item
      >
      <van-tabbar-item
        name="/mine"
        :icon="
          active === '/mine'
            ? 'https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/profile.png'
            : 'https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/profile-1.png'
        "
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
let isActive = ref(false)
// 判断是否首页页面
let isNav = ref(route.meta.index == 1)
let transitionName = ref('van-slide-right')
// 监听切换事件
const onChange = () => {
  // 切换首页路由
  router.push(active.value)
}
// 监听路由切换事件
onBeforeRouteUpdate((to, from) => {
  // 切换路由之后获取页面名称，然后修改顶部导航栏title
  title.value = to.meta.title
  active.value = to.path
  isNav.value = to.meta.index === 1
})

router.beforeEach((to, from) => {
  transitionName.value =
    to.meta.index > from.meta.index ? 'van-slide-right' : 'van-slide-left'
})
const onClickLeft = () => {
  router.back()
}

const clickNav = () => {
  isActive.value = !isActive.value
}
const goTo = (path) => {
  router.push(path)
  isActive.value = false
}
</script>

<style>
.warp {
  height: calc(100% - 100px);
}
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

nav {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.6s linear;
  overflow-x: hidden;
}

nav.active {
  width: 200px;
  padding: 20px;
  background: #fff;
  height: 1000px;
  z-index: 100000;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 0;
  transition: width 0.6s linear;
}

nav.active ul {
  width: 100%;
  padding-top: 300px;
  font-size: large;
}

nav ul li {
  transform: rotateY(0deg);
  opacity: 0;
  transition: transform 0.6s linear, opacity 0.6s linear;
}

nav.active ul li {
  opacity: 1;
  padding: 20px 0;
  transform: rotateY(360deg);
}

nav ul a {
  position: relative;
  color: #000;
  text-decoration: none;
  margin: 0 10px;
}

.icon {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: relative;
  height: 30px;
  width: 30px;
}

.icon:focus {
  outline: 0;
}

.icon .line {
  background-color: #5290f9;
  height: 2px;
  width: 20px;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: transform 0.6s linear;
}

.icon .line2 {
  top: auto;
  bottom: 10px;
}

nav.active .icon .line1 {
  transform: rotate(-765deg) translateY(5.5px);
}

nav.active .icon .line2 {
  transform: rotate(765deg) translateY(-5.5px);
}
.van-tabs__line {
  z-index: 100;
}
</style>
