<template>
  <div class="pa-0">
    <KomisiCard />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeData } from '@/stores'
import KomisiCard from '../components/komisi/KomisiCard.vue'

const store = storeData()

onMounted(async () => {
  await store.fetchKomisiData()
})
</script>
