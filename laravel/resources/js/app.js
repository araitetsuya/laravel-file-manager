import './bootstrap'

import {createApp} from 'vue/dist/vue.esm-bundler'
import * as VueRouter from 'vue-router/dist/vue-router.esm-bundler'

import {routes} from './routes/service.js'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})

const app = createApp({})

app.use(router)

app.mount('#app')
