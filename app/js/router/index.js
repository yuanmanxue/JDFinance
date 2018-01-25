/**
 * @Author: yuanmanxue
 * @Date:   2018-01-16 09:34:40
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-01-25 05:26:22
 */

import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Manage from "../manage/index.vue"
import Blank from "../blank/index.vue"
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
        }
    ],
})
