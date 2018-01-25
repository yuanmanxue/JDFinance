/**
 * @Author: yuanmanxue
 * @Date:   2018-01-16 09:34:40
 * @Last modified by:   yuanmanxue
 * @Last modified time: 2018-01-25 05:26:17
 */

import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueAwesomeSwiper from "vue-awesome-swiper"

Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
