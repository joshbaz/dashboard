import vue from 'vue'
import Router from 'vue-router'

import authselect from '../views/auth/authselect.vue'
vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/auth',
            name:'authselect',
            component: authselect
        }
    ]
})