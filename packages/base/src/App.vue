<template>
  <LayoutComp>
    <router-view></router-view>
  </LayoutComp>
</template>

<script setup lang="ts">
import Layouts from '@hoslink/layout'
const route = useRoute()
const hasLayout = computed(() => {
  return route.meta.hasLayout
})
const LayoutComp = computed(() => {
  return hasLayout.value ? Layouts.DefaultLayout : Layouts.FullPageLayout
})
</script>

<style scoped lang="less">
</style>