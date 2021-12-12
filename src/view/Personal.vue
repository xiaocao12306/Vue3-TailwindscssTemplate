<template>
  <div>
    <van-collapse v-model="activeName" accordion @change="onChange">
      <van-collapse-item title="用户名" name="1">
        {{user.username}}
      </van-collapse-item>
      <van-collapse-item title="账号" name="2">
      {{user.id}}
      </van-collapse-item>
      <van-collapse-item title="积分" name="3">
        {{user.answer_count}}
      </van-collapse-item>
      <van-collapse-item title="创建时间" name="4">
        {{user.create_time}}
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { getUser } from "../http/api";

let user = reactive({})
let activeName = ref('1')
const onChange = e => {
  activeName.value = e
}
getUser(localStorage.getItem('userid')).then(res => Object.assign(user, res))
</script>

<style lang="scss" scoped></style>
