<template>
  <v-container fluid class="pa-0">
    <v-carousel
      height="auto"
      cycle
      interval="5000"
      show-arrows
      hide-delimiter-background
      class="hero-carousel"
    >
      <v-carousel-item
        v-for="slide in store.homepage.slideshow"
        :key="slide.id"
        :src="slide.img"
        cover
      >
        <v-row class="fill-height" justify="center" align="center">
          <div class="text-center">
            <!-- Optional overlay content -->
            <!-- <h1 class="text-h3 font-weight-bold text-white">
              50% INSTANT KOMISI AFILIASI
            </h1>
            <p class="text-subtitle-1 text-white mt-2">
              Tambah penghasilan Anda, passive income menggiurkan!
            </p>
            <v-btn
              :href="slide.link"
              color="yellow-darken-2"
              class="mt-4 text-none"
              size="large"
            >
              Daftar Sekarang
            </v-btn> -->
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeData } from '../../stores'

const store = storeData()


</script>

<style>
.hero-carousel {
  width: 100%;
  max-height: 500px;
}

@media (max-width: 600px) {
  .hero-carousel {
    max-height: 300px;
  }
}

.hero-carousel >>> .v-carousel__controls > .v-btn {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
  min-width: unset !important;
  width: auto !important;
  height: auto !important;
  padding: 0 !important;
  color: white; /* arrow color */
  font-size: 32px; /* arrow size */
  transition: color 0.3s ease;
}

.hero-carousel >>> .v-carousel__controls > .v-btn:hover {
  color: #FFD600; /* hover color */
}

</style>
