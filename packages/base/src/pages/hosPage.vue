<template>
  <iframe
    :src="url" frameborder="0"
    width="100%"
    height="100%"
  />
</template>

<script lang='ts'>
export default {
  name: 'HosPage'
}
</script>
<script setup lang='ts'>
import {ref, onMounted} from 'vue'
const microHosUrl = import.meta.env.VITE_APP_MICRO_HOS_URL
const hash = ref(window.location.hash)

const url = computed(() => {
  return `${microHosUrl}/${hash.value}`
})
window.addEventListener('hashchange', ({newURL}) => {
  hash.value = '#/' + newURL.split('#')[1]
})
// onMounted(() => {
//   console.log(url.value, 'url---')
// })
</script>

<style scoped>
</style>