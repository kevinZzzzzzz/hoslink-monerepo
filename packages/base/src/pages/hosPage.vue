<template>
  <microApp
    name="hosPro"
    inline
    baseroute="/hos"
    :url="url"
    keep-alive
    @created="created"
    @beforemount="beforeMount"
    @mounted="mounted"
    @unmount="unmount" @datachange="handleDataChange"
  />
  <h1>123</h1>
</template>

<script lang='ts'>
export default {
name: ''
}
</script>
<script setup lang='ts'>
import microApp from '@micro-zoe/micro-app'
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import {ref} from 'vue'
window.eventCenterForAppNameVite = new EventCenterForMicroApp('hosPro')
const microHosUrl = import.meta.env.VITE_APP_MICRO_HOS_URL
const url = ref(`${microHosUrl}/hos/`)
console.log(url,microApp, 'url---')
const created = () => {
  console.log('created=====>')
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
</script>

<style scoped>
</style>