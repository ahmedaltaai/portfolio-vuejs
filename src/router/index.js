import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import Projects from '../views/Projects.vue'
import Articles from '../views/Articles.vue'
=======
>>>>>>> f512a6d1e4cbf7d5ea6f6ae9ffce11962668cb28

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
<<<<<<< HEAD
    component: Projects
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
=======
    component: Home
>>>>>>> f512a6d1e4cbf7d5ea6f6ae9ffce11962668cb28
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
