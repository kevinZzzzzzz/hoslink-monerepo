<template>
  <div class="SiderComp">
    <div class="SiderComp_logo">
      <div v-if="store.collapsed" class="SiderComp_logo_collapsed">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div v-else class="SiderComp_logo_unCollapsed">
        <img src="../../assets/companyLogo.png" alt="">
        <p>{{ companyName }}</p>
      </div>
    </div>
    <div class="SiderComp_main">
      <MenuComp />
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'SiderComp'
}
</script>
<script setup lang='ts'>
import { h, ref, watch, reactive } from 'vue'
import { useMainStore } from '@hoslink/store'
import MenuComp from './MenuComp.vue'
const store = useMainStore()
const companyName = ref('光明妇幼')
</script>

<style scoped lang="less">
.SiderComp {
  &_logo {
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: .5px solid #252323;

    &_unCollapsed {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      animation: show 1s;

      img {
        width: 58px;
        height: 40px;
      }

      p {
        margin: 0;
        font-size: 16px;
        font-weight: bolder;
      }
    }

    &_collapsed {
      animation: rotation 10s linear infinite;

      img {
        width: 50px;
        height: 50px;
      }
    }

    @keyframes show {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  &_main {
    padding-top: 10px;
  }
}</style>