const Vue = require('../vue');
let arr1 = ['LOL', 'QLQ', 'ANA'];
let arr2 = [{
        html: '新闻',
        bool: true
    }, {
        html: '娱乐',
        bool: false
    },
    {
        html: '生活',
        bool: false
    }
];
const vm = new Vue({
    el: '#tab',
    data: {
        con: arr1,
        tabs: arr2,
        box: 'box',
        atab: 'atab',


    },
    template: `<div :class="[box]">
                    <ul>
                        <li v-for="(item,index) in con" v-text="item" @click="alis(index)"></li>
                     </ul>
                    <div :class="[atab]" v-for="(item,index) in tabs" v-text="item.html" v-show="item.bool"></div>
                </div>`,
    methods: {
        alis(index) {

            for (let i = 0; i < arr2.length; i++) {
                arr2[i].bool = false;
            }
            arr2[index].bool = true;

        }
    }
});