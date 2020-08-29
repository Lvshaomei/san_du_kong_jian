import Vue from 'vue'
import App from './App'

import scan from './components/p-scan/scan.vue'

Vue.component('scan',scan)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
