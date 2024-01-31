<template>
  <h1 @click="getTest">
    Home hosiptal
  </h1>
</template>


<script lang='ts'>
export default {
  name: 'HomePage'
}
</script>
<script setup lang='ts'>
import { getCurrentInstance } from 'vue';
const {proxy} = getCurrentInstance() as any
const getTest = () => {
  proxy?.$api.getTest().then(res => {
    console.log(res, 123123)
  })
}
</script>

<style scoped>
</style>