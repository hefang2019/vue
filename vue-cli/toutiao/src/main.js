import Vue from 'vue'
import App from './App.vue'
import 'weui'
Vue.config.productionTip = false

import './toutiao.css'

new Vue({
    el: "#app",
    render(createElement) {
        return createElement(App)
    }
})