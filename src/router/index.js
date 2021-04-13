import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/index.vue'
import Location from '../views/Location.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:sitecoreItemId',
    name: 'Location',
    component: Location,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router