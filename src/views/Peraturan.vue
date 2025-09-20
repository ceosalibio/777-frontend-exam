<template>
  <div class="pa-0">
    <Peraturan />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeData } from '@/stores'
import Peraturan from '../components/peraturan/PeraturanCard.vue'

const store = storeData()

onMounted(async () => {
  await store.fetchPeraturanData()
})
</script>
