<template>
  <div class="pa-0">
    <HeroBanner />
    <EarningsGrid />
    <Content />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeData } from '@/stores'
import HeroBanner from '@/components/home/HeroBanner.vue'
import EarningsGrid from '@/components/home/EarningsGrid.vue'
import Content from '@/components/home/Content.vue'

const store = storeData()

onMounted(async () => {
  await store.fetchHomepageData()
})
</script>
