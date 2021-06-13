import Vue from 'vue'
import App from './App'
import router from "./router/index"
import "./assets/css/base.css"
import "./assets/css/common.css"
// import "./assets/css/index.css"
// import "./assets/css/list.css"
// import "./assets/css/register.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components:{
  
  // },
  router,

  render: h => h(App)
})
