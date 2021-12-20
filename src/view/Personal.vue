<template>
  <div>
    <van-cell-group>
      <van-cell title="用户名" value="小曹" />
      <van-cell title="用户id" value="12345678" />
      <van-cell title="注册时间" value="2021-12-10 12:00" />
      <van-cell title="积分" value="14" />
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
