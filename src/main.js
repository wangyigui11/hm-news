import Vue from 'vue'
import App from './App.vue'
// 导入通用的样式
import './styles/base.less'
// 导入字体图标
import './styles/iconfont.less'
// 导入 lib-flexible
import 'lib-flexible'
// 导入路由对象
import router from './router'

/*  注册 Hmheader 组件 */
import HmHeader from './components/HmHeader'
import HmLogo from './components/HmLogo'
import HmButton from './components/HmButton'

Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-button', HmButton)

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})
