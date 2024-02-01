<template>
  <!-- <micro-app
    name="hos-pro"
    baseroute="/hos/"
    iframe
    keep-alive
    :url="url"
    @created="created"
    @beforemount="beforeMount"
    @mounted="mounted"
    @unmount="unmount" @datachange="handleDataChange"
  ></micro-app> -->
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
import microApp from '@micro-zoe/micro-app'
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import {ref, onMounted} from 'vue'
window.eventCenterForAppNameVite = new EventCenterForMicroApp('hos-pro')
const microHosUrl = import.meta.env.VITE_APP_MICRO_HOS_URL
const url = ref(`${microHosUrl}/hos/${window.location.hash}`)
function created() {
  console.log('created=====>')
  microApp.setGlobalData({
    message: 213123,
  })
}
function beforeMount() {
  console.log('beforemount=====>')
}
function mounted() {
  console.log('mounted=====>')
}
function unmount() {
  microApp.clearGlobalDataListener()
  console.log('unmount=====>')
}
function handleDataChange (e: { detail: { data: any; }; }) {
  const {hosPageApi} = e.detail.data
  console.log('来自子应用的数据1:')
}
onMounted(() => {
  console.log(url.value, 'url---')
})
</script>

<style scoped>
</style>