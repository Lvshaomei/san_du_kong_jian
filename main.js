import Vue from 'vue'
import App from './App'
import store from './jump'
Vue.prototype.$store = store
import scan from './components/p-scan/scan.vue'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.component('scan',scan)

Vue.config.productionTip = false

App.mpType = 'app'
new Vue({
  store,
 render: h=> h(App)
}).$mount("#app")
const app = new Vue({
    ...App
})
app.$mount()
