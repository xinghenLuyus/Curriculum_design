// import Vue from 'vue'
// import App from './App.vue'
// import router from './router/router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
 
const app = createApp(App)
app.use(router)
app.mount('#app')