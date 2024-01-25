import { defineStore } from "pinia";

export const environmentStore = defineStore({
  id: "environmentStore",
  // 状态持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'environmentStore',
        storage: localStorage
      }
    ]
  },
  // 定义状态
  state: () => {
    return {
      environment: {}
    }
  },
  getters: {},
  actions: {
    setEnvironment(data) { // 设置环境描述
      this.environment = data;
    },
    getEnvironment() { // 获取环境描述
      return this.environment
    }
  }
});
