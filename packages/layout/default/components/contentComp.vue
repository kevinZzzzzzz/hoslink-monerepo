<template>
    <div class="contentComp">
        <a-tabs v-model:activeKey="activeKey" hideAdd type="editable-card" @edit="onEdit" @tabClick="jump">
            <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" >
            </a-tab-pane>
        </a-tabs>
        <div class="context">
            <a-card class="context__card">
                <slot></slot>
            </a-card>
        </div>
    </div>
</template>

<script lang='ts'>
export default {
  name: 'ContentComp'
}
</script>
<script setup lang="ts">
import { getStorage, setStorage } from "hoslink-xxx";
import { computed, ref, reactive, getCurrentInstance, ComponentInternalInstance, nextTick, watch, watchEffect, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter()
const route = useRoute()
const { proxy } = getCurrentInstance() as ComponentInternalInstance
let panes = reactive([{ id: '0', title: '主页', content: '主页', key: '0', router: '/home'}]);
onMounted(() => {
    const {isFormLogin} = history?.state // history Api
    if (getStorage('localStorage', 'tabData') && !isFormLogin) {
        panes[0] = getStorage('localStorage', 'tabData')
        panes[0].key = '0'
    }
    activeKey.value = '0'
})
const activeKey = ref('0');
watch(() => activeKey.value, (n, o) => {
    setStorage('localStorage', 'tabData', JSON.stringify(panes[n]))
})
// proxy?.$bus.on('updateTab', (data: any) => {
//     let idx = panes.findIndex((e: { router: any }) => {
//         return e.router === data.router
//     })
//     if (idx !== -1) {
//         activeKey.value = panes[idx].key
//     } else {
//         data.key = panes.length + ''
//         panes.push(data)
//         activeKey.value = data.key
//         // proxy?.$headerTab.addTab(data)
//     }
// })
const jump = (e: any) => {
    const url = panes[Number(e)].router
    if (url.includes('/hos-page') || url.includes('/sta-page')) {
        window.history.pushState(history.state, '', `#${url}`)
        window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }))
    } else {
        router.push(url)
    }
}
const remove = (targetKey: string) => {
    let activeIdex = activeKey.value
    if (panes.length <= 1) return false
    if (targetKey === activeIdex) {
        if (panes[Number(targetKey) - 1]) {
            panes.splice(Number(targetKey), 1)
            activeKey.value = (Number(targetKey) - 1) + ''
        } else {
            panes.splice(Number(targetKey), 1)
            activeKey.value = (Number(targetKey)) + ''
        }
        jump(activeKey.value)
    } else {
        if (Number(activeIdex) > Number(targetKey)) {
            activeKey.value = (Number(activeKey.value) - 1) + ''
        }
        panes.splice(Number(targetKey), 1)
    }
    panes.forEach((e: any, idx: number) => {
        e.key = idx + ''
    })
};

const onEdit = (targetKey: string) => {
    remove(targetKey);
};
</script>

<style lang="less" scoped>
.contentComp {
    .context {
        padding: 0 8px;
        > :deep(.ant-card) {
            // width: 100%;
            // overflow-x: scroll;
            height: 80vh;
            overflow-y: scroll;
            box-shadow: 10px 10px 30px 10px #ddd;
        }
        > :deep(.ant-card)::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>