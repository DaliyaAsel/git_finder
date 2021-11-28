import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from './pages/Home'
import NotFound from './pages/404'

// Routering

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ],
    mode: 'history'
})