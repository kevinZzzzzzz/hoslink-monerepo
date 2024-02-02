import { defineStore, createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import { useMainStore } from './module/useMainStore'
import { environmentStore } from './module/environmentStore'
import { useTestStore } from './module/testStore'
createPinia().use(piniaPluginPersist)
/*
  for example
*/
// export const vueStore = defineStore({
//   id: 'vueStore',
//   // 状态持久化
//   persist: {
//     enabled: true,
//     strategies: [
//       {
//         key: 'vue',
//         storage: localStorage
//       }
//     ]
//   },
//   state: () => {
//     return {
//       xxx: {} as any
//     }
//   },
//   getters: {},
//   actions: {
//     setXxx(data: any) {
//       this.xxx = data
//     }
//   }
// })
export {
  useMainStore,
  environmentStore,
  useTestStore
}
