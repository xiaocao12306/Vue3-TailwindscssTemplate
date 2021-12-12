<template>
  <div>
    <!-- 头像昵称和积分 -->
    <div class="flex flex-row justify-between p-4">
      <div class="flex flex-row items-end">
        <van-image :src="user.avatar" height="30" width="30" round></van-image>
        <p class="text-blue-400 ml-3 font-bold text-lg">
          {{ user.answer_count }}
        </p>
      </div>
    </div>
    <!-- 题目主体 -->
    <div class="p-4">
      <p class="mb-4 text-xl font-bold">
        以下图片中哪个是{{ answer.Answer.Answer_Name }}?
      </p>
      <div class="flex flex-row flex-wrap justify-between">
        <img
          v-for="item in answer.Images"
          :key="item.image_code"
          :src="item.image_path"
          @click="pickAnswer(item.image_type)"
          class="mb-5 w-40 h-40 rounded-lg"
        />
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
  username:null
})
let answer = reactive({
  
})
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
    user.answer_count ++
  } else {
    Dialog.alert({
      title: e,
      message: '答错了',
    }).then(() => {
      router.back()
    })
  }
}
</script>

<style lang="scss" scoped></style>
