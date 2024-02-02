<template>
  <h1 @click="addCount">
    Home Page {{ store.count }}
  </h1>
</template>


<script lang='ts'>
export default {
  name: 'HomePage'
}
</script>
<script setup lang='ts'>
import { getCurrentInstance } from 'vue';
import {useTestStore} from '@hoslink/store';
const {proxy} = getCurrentInstance() as any
const store = useTestStore()
const addCount = () => {
  // proxy?.$api.getTest().then(res => {
  //   console.log(res, 123123)
  // })
  store.addCount()
}
</script>

<style scoped>
</style>