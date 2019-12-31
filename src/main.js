import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import i18n from './i18n/index'
import store from './store/index'
import './assets/icon/iconfont.css'
import Mock from './mock'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Mock.bootstrap();
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(api)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App)
})
