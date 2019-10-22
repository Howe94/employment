import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
import AppStore from './modules/AppStore.js';
const store = new vuex.Store({
    state: {
        appName: "Cassie",  // 应用名称
        collapse: false,  // 导航栏收缩状态
        isCollapse:''
    },
    getters: {
        collapse(state){// 对应着上面state
            return collapse;
        }
    },
    mutations: {
        collapse(state){  // 改变收缩状态
            state.collapse = !state.collapse;
        }
    },
    actions: {

    }
})

export default store