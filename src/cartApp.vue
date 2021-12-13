<template>
  <div class="h-screen relative">
    <van-nav-bar
      v-if="isNav"
      class="relative"
      :title="title"
      :fixed="true"
      :placeholder="true"
    >
      <template #left>
        <button class="icon" id="toggle" @click="clickNav">
          <div class="line line1"></div>
          <div class="line line2"></div>
        </button>
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
    <transition name="van-slide-left">
      <div
        class="absolute top-0 bottom-0 w-3/4 bg-white z-50 animation"
        v-if="isActive"
      >
        <aside
          id="sidebar"
          class="sidebar sidebar-default open"
          role="navigation"
        >
          <!-- Sidebar header -->
          <div
            class=" bg-contain h-44 flex flex-col"
            style="
              background-image: url(https://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg);
            "
          >
            <div class=' h-10 w-full bg-opacity-20 bg-black'></div>
            <!-- Sidebar brand image -->
            <div class="  overflow-hidden flex-1 flex items-center p-4">
              <img
              class="rounded-full w-14 h-14"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg"
              />
            </div>
            <!-- Sidebar brand name -->
            <a
              class=" bg-black bg-opacity-20 h-12 w-full p-4 flex items-centet justify-center text-white"
            >
              wangdaitao1940233242@gmail.com
            </a>
          </div>

          <!-- Sidebar navigation -->
          <ul class="p-4 font-bold text-gray-900">
            <li class="p-4 mb-2">
              <a href="#">
                <van-icon name="thumb-circle" size="26" class="mr-8" color="#777bce" />
                Inbox
              </a>
            </li>
            <li class="p-4 mb-2">
              <a href="#">
                <van-icon name="star" size="26" class="mr-8"  color="#ec9433"/>
                Starred
              </a>
            </li>
            <li class="p-4 mb-2">
              <a href="#">
                <van-icon name="invitation" size="26" class="mr-8"  color="#6f9388"/>
                Sent Mail
              </a>
            </li>
            <li class="p-4 mb-2">
              <a href="#">
                <van-icon name="smile" size="26" class="mr-8" color="#ce3b3b"/>
                Drafts
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </transition>
    <van-overlay :show="isActive" @click="isActive = false"></van-overlay>
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
.van-tabs__line {
  z-index: 100;
}
.top-bar {
  height: 25px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
