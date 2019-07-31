import Vue from 'vue'
//自定义组件
import App from './App.vue'
//第三方组件
//全局引入
import axios from 'axios'

import './elm.css'

Vue.prototype.$axios = axios
//搜索
import {
    Search
} from 'vant';

Vue.use(Search);

//宫格
import {
    Grid,
    GridItem
} from 'vant';

Vue.use(Grid).use(GridItem);
//分割线
import {
    Divider
} from 'vant';

Vue.use(Divider);

//轮播图
import {
    Swipe,
    SwipeItem
} from 'vant';

Vue.use(Swipe).use(SwipeItem);

//下拉菜单
import {
    DropdownMenu,
    DropdownItem
} from 'vant';

import router from './router'

Vue.use(DropdownMenu).use(DropdownItem);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')