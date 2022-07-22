import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/ProductPage/:id/:slug',
        name: 'ProductPage',
        component: () =>
            import ('../views/ProductPage.vue'),
        props: route => ({ id: parseInt(route.params.id) })
    }
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active-link'
});

export default router;