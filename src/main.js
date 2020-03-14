import Vue from 'vue'
import App from './App.vue'
import './styles/base.less'
import './styles/iconfont.less'
import 'lib-flexible'
//导入 路由
import router from './router'

// 导入 组件
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmButton from './components/HmButton.vue'
import HmInput from './components/HmInput.vue'
import axios from 'axios'

Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-button', HmButton)
Vue.component('hm-input', HmInput)

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'

Vue.config.productionTip = false
const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})
