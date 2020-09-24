import Router from 'vue-router'
import Vue from 'vue'
import BoardListContainer from "@/components/BoardListContainer.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/sort/:type?',
            name: 'sorted-view',
            component: BoardListContainer
        }
    ]
})