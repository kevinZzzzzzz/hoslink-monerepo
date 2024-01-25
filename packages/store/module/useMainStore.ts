import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "mainStore",
  // 状态持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'mainStore',
        storage: localStorage
      }
    ]
  },
  state: () => {
    return {
      collapsed: false as Boolean,
      showFullLoading: false as Boolean,
    }
  },
  getters: {},
  actions: {
    changeCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
});
