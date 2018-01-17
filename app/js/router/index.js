/**
 * @Author: yuanmanxue
 * @Date:   2018-01-16 09:34:40
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-01-17 08:49:06
 */

import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
    ],
})
