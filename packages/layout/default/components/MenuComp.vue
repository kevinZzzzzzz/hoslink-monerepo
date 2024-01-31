<template>
  <div class="MenuComp">
    <a-menu
      v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys"
      mode="inline" theme="dark"
      :inline-collapsed="state.collapsed" :items="menuList"
      @click="handleClick"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MenuComp'
}
</script>
<script setup lang="ts">
import { h, ref, watch, reactive, onMounted } from 'vue'
import { environmentStore } from '@hoslink/store'
import IconComp from './Icon.ts'
import { menuData } from '../../constant/menuData.json'

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: [''],
  preOpenKeys: [''],
});
const store = environmentStore()
const environment: {
  depict: 'hospital' | 'station',
} = store.getEnvironment()
console.log(environment)
const menuList = ref<any[]>([]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    console.log(_val, oldVal, 'newVal')
    state.preOpenKeys = oldVal;
  },
);
onMounted(() => {
  menuList.value = initMenuList(menuData)
})
const initMenuList = (menu: any[]) => {
  const newMenuList: any[] = []
  for (const e of menu.filter((item) => item.platform.toLowerCase().includes(environment.depict) || item.platform === 'SUPERVISE')) {
    const obj = {
      ...e,
      key: e.id,
      label: e.shortName,
      title: e.name,
      path: e.path,
      parentId: e.parentId ? e.parentId : '',
      type: e.children && !e.parentId && e.children.length > 0 ? 'group' : null,
      children: e.children && e.children.length > 0 ? initMenuList(e.children) : null,
      icon: e.icon ? IconComp(e.icon) : null
    }
    newMenuList.push(obj)
  }
  return newMenuList
}
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
const handleClick = ({ item }) => {
  console.log(item, 'handleClick')
  let hash = ''
  if (item.platform === 'HOSPITAL') {
    hash = 'hos' + item.path
  } else if (item.platform === 'STATION') {
    hash = 'sta' + item.path
  }
  window.location.hash = hash
}
</script>

<style scoped></style>