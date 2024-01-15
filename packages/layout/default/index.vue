<template>
  <div class='main'>
    <div class="main__context">
      <LayoutComp>
        <slot></slot>
      </LayoutComp>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DefaultLayout'
}
</script>
<script setup lang="ts" >
import {ref, onMounted, reactive} from 'vue'
import LayoutComp from './LayoutComp.vue'
</script>
<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  &__context {
    height: 100vh;
  }
}
</style>