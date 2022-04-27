import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;



//添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
      if (localStorage.getItem('token')) {
          config.headers.token = localStorage.getItem('token');
      }
      return config;
  },
  error => {
      return Promise.reject(error);
  });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
