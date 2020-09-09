import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
// 非同期で読み込まれる
// webpackChunkNameのコメントを無くすと数字の連番になる
const Ip = () => import(/* webpackChunkName: "other1" */ './views/Ip.vue');
const MovieSearch = () => import(/* webpackChunkName: "other2" */ './views/MovieSearch.vue');
const RockPaperScissors = () =>
    import(/* webpackChunkName: "other3" */ './views/RockPaperScissors.vue');

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/ip',
        name: 'Ip',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "1" */ './views/Ip.vue'),
        component: Ip,
    },
    {
        path: '/movieSearch',
        name: 'MovieSearch',
        component: MovieSearch,
    },
    {
        path: '/rockPaperScissors',
        name: 'RockPaperScissors',
        component: RockPaperScissors,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
