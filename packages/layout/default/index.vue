<template>
  <div class='main'>
    <div class="main__context">
      <p>LAYOUT</p>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'DefaultLayout'
}
</script>
<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue'
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