import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// import 'element-ui/lib/theme-chalk/index.css'; // 默认主题


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;



//添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  request => {

    if (localStorage.getItem("token") != null && localStorage.getItem("token") != '') {
        request.headers = {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      // }
    }
    return Promise.resolve(request)
  },
  error => {
    return Promise.reject(error)
  
  });

  router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
      if (localStorage.getItem("token")) {
        next({ path: "/manage" });
      } else {
        next();
      }
    } else {
      if (to.matched.some(record => record.meta.auth)) {
        if (localStorage.getItem("token")) {
          next();
        } else {
          next({ path: "/" });
        }
  
      } else {
        next();
      }
    }
  
  })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
