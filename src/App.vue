<template>
  <v-app>
    <Navbar />
    <v-main>
      <Particles />
      <router-view />
    </v-main>
    
    <Footer />
  </v-app>
</template>

<script setup>
import Particles from '@/components/ui/Particle.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import { onMounted } from 'vue'
import { storeData } from '@/stores'

const store = storeData()

onMounted(async () => {
  await store.fetchGlobalData()
})

</script>
