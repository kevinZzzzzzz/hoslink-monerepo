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
import {useMainStore} from '@hoslink/store';
const store: any = useMainStore() // 字典仓库
const {xxx} = store // 货品类型字典
console.log(store, 'useMainStore')
</script>

<style scoped>
</style>