import { createRouter, createWebHistory } from 'vue-router';
import store                              from '../store/store'; 
import Cookies                            from 'js-cookie';

/* Importation des vues */

import HomeView      from '../views/Home.vue';
import Test1View     from '../views/test1.vue';
import Test2View     from '../views/test2.vue';

import Error404View  from '../views/errors/404.vue';

/* Def du router */

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [

    // NavBar

        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/home',
            name: 'home2',
            component: HomeView
        },
        {
            path: '/test1',
            name: 'test1',
            component: Test1View
        },
        {
            path: '/test2',
            name: 'test2',
            component: Test2View
        },

    // Specials

        {
            path: '/not-found',
            name: 'not-found',
            component: Error404View
        },

    // Redirects

        {
            path: '/:catchAll(.*)',
            redirect: '/not-found'
        }
    ]
});

/* Before each */

router.beforeEach(async(to, from, next) => {
    
    // Creation des logs 
    if(!!Cookies.get().clientId) { 
        await store.dispatch('createLog', { logType: 'navigation', url: `${window.location.origin}${to.fullPath}`, cookiesAccepted: true });
    };

    // Fin de la methode
    return next();
});

export default router;