<template>
  <a-layout style="height: 100vh" >
    <a-layout-sider :style="siderStyle">Sider</a-layout-sider>
    <a-layout>
      <a-layout-header :style="headerStyle">Header</a-layout-header>
      
      <a-layout-content
        :style="{ padding: '0', background: '#fff', borderTop: '1px solid #ccc' }"
      >
        <ContentComp>
          <!-- <keep-alive>
            <slot></slot> -->
          <!-- </keep-alive> -->
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </ContentComp>
      </a-layout-content>
      <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
export default {
  name: 'LayoutComp'
}
</script>
<script setup lang='ts'>
import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
};

const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
};
</script>

<style scoped lang="less"></style>