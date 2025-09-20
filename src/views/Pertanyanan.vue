<template>
  <div class="pa-0">
    <Pertanyanan />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeData } from '@/stores'
import Pertanyanan from '../components/pertanyanan/PertanyananCard.vue'

const store = storeData()

onMounted(async () => {
  await store.fetchPertanyananData()
})
</script>
