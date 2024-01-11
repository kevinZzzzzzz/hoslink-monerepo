<template>
  <div class="main">
    <h1>Login</h1>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'LoginPage'
}
</script>
<script setup lang='ts'>
import {ref} from 'vue'
import { vueStore } from '@hoslink/store';
const store: any = vueStore() // 字典仓库
const {xxx} = store // 货品类型字典
store.setXxx(123)
console.log(store, 'vueStore')
</script>

<style scoped>
</style>