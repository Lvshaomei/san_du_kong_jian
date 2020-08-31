import Vue from 'vue'
import App from './App'
import store from './jump'
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

new Vue({
  store,
 render: h=> h(App)
}).$mount("#app")
const app = new Vue({
	store,
    ...App
})
app.$mount()
