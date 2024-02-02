import { defineStore } from "pinia";

export const useTestStore = defineStore({
  id: "testStore",
  // 状态持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'testStore',
        storage: sessionStorage
      } 
    ]
  },
  state: () => {
    return {
     count: 0,
    }
  },
  getters: {},
  actions: {
    addCount() {
      this.count++
    },
    minusCount() {
      this.count--
    }
  }
});
