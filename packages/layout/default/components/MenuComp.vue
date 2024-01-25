<template>
  <div class="MenuComp">
    <a-menu
      v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys"
      mode="inline" theme="dark"
      :inline-collapsed="state.collapsed" :items="menuList"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MenuComp'
}
</script>
<script setup lang="ts">
import { h, ref, watch, reactive } from 'vue'
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
const environment = store.getEnvironment()

const menuList = ref([]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    console.log(_val,oldVal, 'newVal')
    state.preOpenKeys = oldVal;
  },
);
onMounted(() => {
  menuList.value = initMenuList(menuData)
})
const initMenuList = (menu: any[]) => {
  const newMenuList = []
  for (const e of menu.filter((item) => item.platform.toLowerCase().includes(environment.depict) || item.platform === 'SUPERVISE')) {
    const obj = {
      key: e.id,
      label: e.shortName,
      title: e.name,
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
</script>

<style scoped></style>