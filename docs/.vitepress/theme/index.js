import DefaultTheme from 'vitepress/theme'
import {
  AntDesignContainer,
} from '@vitepress-demo-preview/component'
import arcoDesign from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@vitepress-demo-preview/component/dist/style.css'
import '@/assets/fonts/custom-font/index.scss'
import '@/assets/scss/theme/normal/gird.scss'
import '@/assets/scss/theme/normal/header.scss'
import '@/assets/fonts/alifont/iconfont.css'
import '@/assets/scss/loading/index.scss'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import '@arco-design/web-vue/dist/arco.css'
import '@/assets/scss/index.scss'
import './index.scss'
export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const plugin = await import('../../../packages/index.ts')
      app.use(plugin.default)
      app.component('demo-preview', AntDesignContainer)
      app.use(arcoDesign)
      app.use(ArcoVueIcon)

      const resizeFun = () => {
        const docEle = document.documentElement;
        const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        const resizeFun = () => {
          const { clientHeight } = docEle;
          if (!clientHeight) return;
          docEle.style.fontSize = `${100 * (clientHeight / 1080)}px`;
        };
        if (!document.addEventListener) return;
        window.addEventListener(resizeEvt, resizeFun, false);
        window.addEventListener('DOMContentLoaded', resizeFun, false);
        resizeFun();
      };
      resizeFun();
    }
  }
}