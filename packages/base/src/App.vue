<template>
  <LayoutComp>
    <router-view />
  </LayoutComp>
</template>

<script setup lang="ts">
import Layouts from '@hoslink/layout'
import {onMounted, computed} from 'vue'
import { environmentStore } from '@hoslink/store'
import {environment} from '@/environment/dev'
import {useRoute} from 'vue-router'

const store = environmentStore()
const route = useRoute()
store.setEnvironment(environment)

const hasLayout = computed(() => {
  return route.meta.hasLayout
})
const LayoutComp = computed(() => {
  return hasLayout.value ? Layouts.DefaultLayout : Layouts.FullPageLayout
})
</script>

<style scoped lang="less">
</style>