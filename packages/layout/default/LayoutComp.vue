<template>
  <a-layout :style="layoutStyle">
    <a-layout-sider
      v-model:collapsed="store.collapsed" :style="siderStyle"
      :trigger="null"
      collapsible
    >
      <SiderComp />
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="headerStyle">
        <div class="header">
          <div class="header_fold" @click="changeColStyle">
            <MenuUnfoldOutlined v-if="store.collapsed" />
            <MenuFoldOutlined v-else />
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <ContentComp>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </ContentComp>
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        <CopyRight />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
export default {
  name: 'LayoutComp'
}
</script>
<script setup lang='ts'>
import { CSSProperties, onMounted } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { useMainStore } from '@hoslink/store'
import ContentComp from './components/ContentComp.vue'
import CopyRight from './components/CopyRight.vue'
import SiderComp from './components/SiderComp.vue'

const store = useMainStore()
const layoutStyle: CSSProperties = {
  height: '100vh',
  borderRadius: '15px',
  overflow: 'hidden',
};
const headerStyle: CSSProperties = {
  textAlign: 'left',
  height: '74px',
  padding: '0 20px',
  backgroundColor: '#fff',
};
const contentStyle: CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#F0F2F5',
  border: '1px solid #d9d9d9',
};
const siderStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#001529',
  border: '1px solid #d9d9d9',
};
const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  // maxHeight: 40,
  overflow: 'hidden',
  padding: '5px 0px',
  backgroundColor: '#fff',
}

const changeColStyle = () => {
  store.changeCollapsed()
}
</script>

<style scoped lang="less">
.header {
  height: 100%;
  display: flex;

  &_fold {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>