import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Komisi from '@/views/Komisi.vue'
import Peraturan from '@/views/Peraturan.vue'
import Pertanyanan from '@/views/Pertanyanan.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/komisi', component: Komisi },
  { path: '/peraturan', component: Peraturan },
  { path: '/pertanyanan', component: Pertanyanan },
  // Add other routes here
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
