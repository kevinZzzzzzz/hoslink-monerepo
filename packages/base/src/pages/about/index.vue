<template>
  <h1 @click="getTest">About Page</h1>
</template>


<script lang='ts'>
export default {
  name: 'AboutPage'
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