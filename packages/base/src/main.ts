import { createApp } from 'vue'
import './style.less'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import microApp from "@micro-zoe/micro-app";
import router from './router/index'
import api from '@/Api'
import App from './App.vue'
import {Antd} from '@hoslink/layout'
// microApp.start({
//   plugins: {
//     modules: {
//       'hosPro': [
//         {
//           loader(code) {
//             // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
//             code = code.replace(
//               /(from|import)(\s*['"])(\/hos\/)/g,
//               (all) => {
//                 return all.replace("/hos/", `${import.meta.env.VITE_APP_MICRO_HOS_URL}/hos/`);
//               }
//             );
//             return code;
//           }
//         }
//       ]
//     }
//   }
// })
declare module 'vue' {
  export interface ComponentCustomProperties {
    $api: any,
  }
}
declare interface window {
  eventCenterForAppNameVite: any
}
const store = createPinia().use(piniaPluginPersist)
const app = createApp(App)
app.config.globalProperties.$api = { ...api }
// 全局错误拦截
app.config.errorHandler = (err, vm, info) => {
  console.error()
}
app.use(store).use(router).use(Antd).mount('#app')
