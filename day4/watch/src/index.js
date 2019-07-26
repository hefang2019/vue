const Vue = require('../vue');

Vue.component('my-header', {
    //从标签的属性值上获取父组件给的值

    props: ['title', 'red', 'lucency'],
    template: `<div class="box1">
                    <header :style="{background:this.red}" v-html="this.title"></header>
                </div>`,
});
var isok = false;
//根容器
new Vue({
    el: '#demo',
    data: {
        title: '微信',
        color: 'red',
    },
    template: `<div @click="test">
                    <my-header :title="title" :red="color" :lucency="opacity"></my-header>
                </div>`,
    methods: {
        test() {
            if (isok) {
                this.title = '微信',
                    this.color = 'red',
                    isok = !isok
            } else {
                this.title = '支付宝',
                    this.color = '#58bc58',
                    isok = !isok

            }
        }
    }

});