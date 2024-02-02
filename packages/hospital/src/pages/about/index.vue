<template>
  <div class="main" @click="addCount">
    <h1>about page{{ store.count }}</h1>
  </div>
</template>

<script lang='ts'>
export default {
name: ''
}
</script>
<script setup lang='ts'>
import {ref} from 'vue'
import {useTestStore} from '@hoslink/store';
const store = useTestStore()
const addCount = () => {
  console.log(store)
  store.addCount()
}
</script>

<style scoped>
</style>