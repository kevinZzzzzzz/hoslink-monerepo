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
      <a-menu
        v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys"
        mode="inline" theme="dark"
        :inline-collapsed="state.collapsed" :items="items"
      />
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
import { AppstoreOutlined, DesktopOutlined, InboxOutlined, MailOutlined, PieChartOutlined } from '@ant-design/icons-vue/lib/icons';
const store = useMainStore()
const companyName = ref('光明妇幼')
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});
const items = reactive([
  {
    key: '',
    label: '主导航',
    type: 'group',
    children: [
      {
        key: '1',
        icon: () => h(PieChartOutlined),
        label: 'Option 1',
        title: 'Option 1',
      },
      {
        key: '2',
        icon: () => h(DesktopOutlined),
        label: 'Option 2',
        title: 'Option 2',
      },
      {
        key: '3',
        icon: () => h(InboxOutlined),
        label: 'Option 3',
        title: 'Option 3',
      },
      {
        key: 'sub1',
        icon: () => h(MailOutlined),
        label: 'Navigation One',
        title: 'Navigation One',
        children: [
          {
            key: '5',
            label: 'Option 5',
            title: 'Option 5',
          },
          {
            key: '6',
            label: 'Option 6',
            title: 'Option 6',
          },
          {
            key: '7',
            label: 'Option 7',
            title: 'Option 7',
          },
          {
            key: '8',
            label: 'Option 8',
            title: 'Option 8',
          },
        ],
      },
      {
        key: 'sub2',
        icon: () => h(AppstoreOutlined),
        label: 'Navigation Two',
        title: 'Navigation Two',
        children: [
          {
            key: '9',
            label: 'Option 9',
            title: 'Option 9',
          },
          {
            key: '10',
            label: 'Option 10',
            title: 'Option 10',
          },
          {
            key: 'sub3',
            label: 'Submenu',
            title: 'Submenu',
            children: [
              {
                key: '11',
                label: 'Option 11',
                title: 'Option 11',
              },
              {
                key: '12',
                label: 'Option 12',
                title: 'Option 12',
              },
            ],
          },
        ],
      },
    ]
  }, {
    key: '',
    label: '管理',
    type: 'group',
    children: [
      {
        key: '1',
        icon: () => h(PieChartOutlined),
        label: 'Option 1',
        title: 'Option 1',
      },
      {
        key: '2',
        icon: () => h(DesktopOutlined),
        label: 'Option 2',
        title: 'Option 2',
      },
      {
        key: '3',
        icon: () => h(InboxOutlined),
        label: 'Option 3',
        title: 'Option 3',
      },
      {
        key: 'sub2',
        icon: () => h(AppstoreOutlined),
        label: 'Navigation Two',
        title: 'Navigation Two',
        children: [
          {
            key: '9',
            label: 'Option 9',
            title: 'Option 9',
          },
          {
            key: '10',
            label: 'Option 10',
            title: 'Option 10',
          },
          {
            key: 'sub3',
            label: 'Submenu',
            title: 'Submenu',
            children: [
              {
                key: '11',
                label: 'Option 11',
                title: 'Option 11',
              },
              {
                key: '12',
                label: 'Option 12',
                title: 'Option 12',
              },
            ],
          },
        ],
      },

    ]
  }
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
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