<template>
    <v-container>
        <v-row no-gutters >
            <v-col cols="12">
                <v-img
                    :src="download_app.img"
                    width="100%"
                    height="150px"
                    cover
                ></v-img>
            </v-col>
        </v-row>
    </v-container>
    
  <v-footer class="footer-custom">
    <v-container fluid class="pa-0">
       

      <!-- Contact Info (Hidden on Mobile) -->
      <v-row class="footer-contact-row d-none d-md-flex justify-center">
        <v-col
          v-for="(item, index) in contact"
          :key="index"
          cols="12"
          md="3"
          class="d-flex align-center justify-start px-4 py-2"
        >
          <v-img
            v-if="item.img"
            :src="item.img"
            width="24"
            height="24"
            class="mr-3"
            alt="icon"
          />
          <div>
            <span class="font-weight-medium">{{ item.label }}:</span>
            <span class="text-warning">{{ item.value }}</span>
          </div>
        </v-col>
      </v-row>

      <!-- Partner Logos -->
      <v-row no-gutters class="footer-partner-row d-flex align-center justify-space-around flex-wrap">
        <v-col
          v-for="partner in filteredFooter"
          :key="partner.name"
          cols="auto"
          class="text-center px-4 py-2"
        >
          <a v-if="partner.link" :href="partner.link" target="_blank" rel="noopener">
            <v-img :src="partner.img" width="200px" class="mb-2 mx-auto" />
          </a>
          <v-img v-else :src="partner.img" width="200px" class="mb-2 mx-auto" />
        </v-col>
      </v-row>

    </v-container>
  </v-footer>
</template>


<script setup>
    import { ref, onMounted, computed } from 'vue'
    import apiClient from '@/utils/axios'

    const contact = ref([])
    const footer = ref([])
    const download_app = ref({})

    const filteredFooter = computed(() =>
    footer.value.filter(item => item.name !== 'Pagcor Philippines')
    )
    onMounted(async () => {
        try {
            const { data } = await apiClient.get('/global')
            contact.value = data.contact
            footer.value = data.footer
            download_app.value = data.download_app
        } catch (error) {
            console.error('Error fetching footer data:', error)
        }
    })

</script>

<style scoped>
.footer-custom {
  background-color: #0d1b3e !important;
  color: white;
}

.footer-banner-row {
  max-height: 150px; /* Adjust height as needed */
  overflow: hidden;
  border-bottom: 2px solid #2a3a5f;
}

.footer-contact-row {
  padding: 15px 0;
background-color: #003C82;
  font-size: 14px;
}

.footer-contact-row .v-icon {
  font-size: 20px;
}

.footer-partner-row {
  padding: 20px 0;
}

.footer-partner-text {
  font-size: 12px;
  line-height: 1.2;
}

.footer-partner-row .v-image {
  max-height: 70px; /* Adjust image height */
  filter: grayscale(100%) brightness(200%) invert(100%); /* Optional: to make logos white */
}
</style>