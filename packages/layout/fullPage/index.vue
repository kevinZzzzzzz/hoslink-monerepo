<template>
  <div class='main'>
    <div class="main__context">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'FullPageLayout'
}
</script>
<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue'
</script>
<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  &__context {
    height: 100vh;
  }
}
</style>