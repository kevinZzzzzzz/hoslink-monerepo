<template>
  <div class="copyRight">
    <img src="../../assets/company.png" alt="" />
    <p>CopyRight | <CopyrightOutlined /> {{ year }} 穿越医疗技术支持</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CopyRight'
}
</script>
<script setup lang="ts">
import {ref} from 'vue'
import { CopyrightOutlined } from "@ant-design/icons-vue";

const year = ref(new Date().getFullYear())
</script>

<style lang="less" scoped>
.copyRight {
  height: 40px;
  text-align: center;
  img {
    width: 110px;
    height: 20px;
  }
  p {
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular-, PingFangSC-Regular;
    font-weight: normal;
    color: rgba(0,0,0,0.45);
    line-height: 20px;
  }
  &--hasPos {
    text-align: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>