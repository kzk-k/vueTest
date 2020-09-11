import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/pages/Home.vue";
// import Other from "./components/pages/Other.vue";
// 非同期で読み込まれる
// webpackChunkNameのコメントを無くすと数字の連番になる
const Other = () =>
    import(
        /* webpackChunkName: "../dist/other1" */ "./components/pages/Other.vue"
    );

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/other",
        name: "Other",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "1" */ './views/Other.vue'),
        component: Other
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
