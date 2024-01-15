<template>
  <div class="SiderComp">
    <div class="SiderComp_logo">
      <h1>Logo</h1>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'SiderComp'
}
</script>
<script setup lang='ts'>
import {ref} from 'vue'
</script>

<style scoped lang="less">
.SiderComp {
  &_logo {
    height: 60px;
  }
}
</style>