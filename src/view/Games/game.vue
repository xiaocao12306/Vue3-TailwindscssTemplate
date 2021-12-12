<template>
  <div>
    <!-- 头像昵称和积分 -->
    <!-- 题目主体 -->
    <div class="p-4">
      <p class="mb-10 text-2xl font-bold text-cyan">
        以下图片中哪个是{{ answer.Answer.Answer_Name }}?
      </p>
      <div class="flex flex-row flex-wrap justify-between">
        <div
          v-for="item in answer.Images"
          :key="item.image_code"
          @click="pickAnswer(item.image_type)"
          class="relative mb-5"
        >
          <img :src="item.image_path" class="w-40 h-40 rounded-lg" />
          <p
            class="
              absolute
              bottom-0
              bg-gradient-to-t
              from-black
              text-white
              h-10
              flex
              items-center
              w-full
              justify-center
            "
          >
            {{ item.image_name }}
          </p>
        </div>
      </div>
      <div class="w-full flex justify-around">
        <van-button @click="back">结束答题</van-button>
        <van-button type="primary" @click="nextAnswer" color="#2ac8dd">下一题</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { answerCountAdd, getGames, getUser } from '../../http/api'
import { shuffle } from 'lodash'
import router from '../../route/main'
import { Dialog } from 'vant'
let route = useRouter()
let user = reactive({
  avatar: localStorage.getItem('avatar'),
  username: null,
})
let answer = reactive({})
getUser(localStorage.getItem('userid')).then((res) => {
  Object.assign(user, res)
})

function updateAnswer() {
  getGames().then((res) => {
    res.Images = shuffle(res.Images)
    Object.assign(answer, res)
  })
}

updateAnswer()
const pickAnswer = (e) => {
  if (e === answer.Answer.Answer_Name) {
    updateAnswer()
    answerCountAdd(112)
    user.answer_count++
  } else {
    Dialog.alert({
      title: e,
      message: '答错了',
    }).then(() => {
      router.back()
    })
  }
}

const nextAnswer = () => updateAnswer()
const back = () => router.back()
</script>

<style lang="scss" scoped></style>
