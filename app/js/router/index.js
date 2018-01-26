/**
 * @Author: yuanmanxue
 * @Date:   2018-01-16 09:34:40
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-01-26 05:06:36
 */

import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Manage from "../manage/index.vue"
import Blank from "../blank/index.vue"
import Crowd from '../crowd/index.vue'
import Mine from '../mine/index.vue'
import "../../css/reset.scss"
import "../../css/iconfont.css"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/manage",
            name: "manage",
            component: Manage,
        },
        {
          path: "/blank",
          name: "blank",
          component: Blank
        },
        {
          path: '/crowd',
          name: 'crowd',
          component: Crowd
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine
        }
    ],
})
