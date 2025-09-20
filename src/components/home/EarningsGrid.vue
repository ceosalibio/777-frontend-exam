<template>
  <div class="pa-4">
    <v-row justify="center" align="center" class="ga-4">
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="slide in store.homepage.offers"
        :key="slide"
      >
        <v-img
        :src="slide.img"
        class="offer-img"
        cover
        height="200"
        width="100%"
      />
      </v-col>
    </v-row>
  </div>
</template>


<script setup>
import { storeData } from '../../stores'

const store = storeData()

</script>

<style scoped>
.offer-img {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100px;
  width: 100%;
  object-fit: cover;
}

.offer-img:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}
</style>
