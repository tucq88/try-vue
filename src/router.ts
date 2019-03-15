import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/views/Login.vue';
import AboutPage from '@/views/About.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/',
      name: 'about',
      component: AboutPage,
    },
    // otherwise redirect to home
    { path: '*', redirect: '/' },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  console.log(loggedIn);

  if (authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { returnUrl: to.path }
    });
  }

  next();
});

export default router;
