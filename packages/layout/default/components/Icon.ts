import * as icons from '@ant-design/icons-vue/lib/icons';
import { h } from 'vue'


const IconComp = (iconName: string) => {
  return () => h(icons[iconName])
}
export default IconComp