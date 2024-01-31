<template>
  <router-view />
</template>

<script setup lang="ts">
import {onMounted, computed} from 'vue'
import { environmentStore } from '@hoslink/store'
import {environment} from '@/environment/dev'
import {useRoute} from 'vue-router'

const store = environmentStore()
const route = useRoute()
store.setEnvironment(environment)
onMounted(() => {
  console.log('子线程内的mounted')
})
</script>

<style scoped lang="less">
</style>