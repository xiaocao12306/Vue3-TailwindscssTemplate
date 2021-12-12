<template>
  <div class="h-screen relative">
    <van-nav-bar v-if="isNav" class="relative" :title="title" :fixed="true" :placeholder="true">
      <template #left>
        <van-icon name="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/侧边菜单.png" @click="clickNav" />
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
    <div :class="{ 'sidebar': true, 'active': isActive }">
      <div class="sidebar-overlay" @click="close"></div>
      <div class="sidebar-content">
        <div class="top-head">
          <van-image src="https://marketplace.canva.cn/EAEsSl8eCfQ/1/0/1600w/canva-ewokWcowJxA.jpg"></van-image>
          <div>
            <div class="name">小曹同学</div>
            <div class="email">3027478654@qq.com</div>
          </div>
        </div>
        <div class="nav-left">
          <a href="https://github.com/xiaocao12306" class=" text-base flex items-center mb-2">
            <van-icon name="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/github.svg" size="26" class="mr-2"></van-icon> GitHub
          </a>
          <a href="#" class=" text-base flex items-center mb-2">
            <van-icon name="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/qq (1).svg" size="26" class="mr-2"></van-icon> 3027478654
          </a>
          <a href="#" class=" text-base flex items-center mb-2">
            <van-icon name="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/wechat.svg" size="26" class="mr-2"></van-icon> WeChat
          </a>
          <a href="https://github.com/xiaocao12306" class=" text-base flex items-center mb-2">
            <van-icon name="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/twitter.svg" size="26" class="mr-2"></van-icon> Twitter
          </a>
        </div>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <TabBar class="fixed bottom-3 w-full flex justify-center" :active="active" v-if="isNav" />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
// 导入useroute函数
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import TabBar from './components/TabBar.vue'

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

const close = () => {
  isActive.value = false
}
</script>

<style>
:root{
  --van-blue: #2ac8dd;
  --van-nav-bar-text-color:var(--van-blue);
}
.warp {
  height: calc(100% - 100px);
  position: relative;
}
.sidebar .sidebar-content,
.sidebar .sidebar-overlay {
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  transition: all 0.3s ease-in-out 0s;
}

.sidebar .sidebar-overlay {
  right: 0;
  opacity: 0;
  width: 100%;
  z-index: 999;
  transform: scale(0);
  background: rgba(0, 0, 0, 0.4);
}

.sidebar .sidebar-content {
  width: 60%;
  color: #333;
  padding: 15px;
  z-index: 9999;
  background: #fff;
  transform: translateX(-100%);
}

.sidebar.active .sidebar-content {
  transform: translateX(0);
}

.sidebar.active .sidebar-overlay {
  opacity: 1;
  transform: scale(1);
}

.sidebar .sidebar-content .top-head .name {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 5px;
}

.sidebar .sidebar-content .top-head .email {
  font-size: 13px;
  margin-bottom: 50px;
}

.sidebar .sidebar-content .nav-left > a {
  color: #333;
  padding: 10px 0;
  vertical-align: top;
  text-decoration: none;
}

.sidebar .sidebar-content .nav-left > a > span {
  color: #aaa;
  font-size: 24px;
  min-width: 40px;
  display: inline-block;
}
</style>
