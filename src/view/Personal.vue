<template>
  <div>
    <van-cell-group>
      <van-cell title="用户名" :value="user.username" />
      <van-cell title="用户id" :value="user.id" />
      <van-cell title="注册时间" :value="user.create_time" />
      <van-cell title="积分" :value="user.answer_count" />
    </van-cell-group>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { getUser } from '../http/api'

let user = reactive({})
let activeName = ref('1')
const onChange = (e) => {
  activeName.value = e
}
getUser(localStorage.getItem('userid')).then((res) => Object.assign(user, res))
</script>

<style lang="scss" scoped></style>
