<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="user.userid"
          name="id"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="user.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity"
import { signin,getUser } from "../http/api"
import { useRouter } from 'vue-router'
const router = useRouter()
let user = reactive({
  userid:null,
  username:null,
  password:null,
})
const onSubmit = e => {
  console.log(e)
  getUser(e.id).then(res => {
    localStorage.setItem('userid', res.id)
    router.back()
  })
}
</script>

<style lang="scss" scoped></style>
