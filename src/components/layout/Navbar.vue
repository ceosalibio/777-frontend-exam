<template>
  <v-app-bar app class="bar-color" dark>
    <v-container  class="d-flex align-center justify-space-between">
      <!-- Logo -->
      <v-toolbar-title class="ma-0 pa-0">
        <v-img
          src="https://dev-exam.777tech.me/senior_level/layout/images/logo-ole-affiliate.svg"
          alt="Logo"
          contain
          max-height="40"
        />
      </v-toolbar-title>

      <!-- Desktop Auth Buttons -->
      <div class="d-none d-md-flex ga-2">
        <Button :href="store.global?.link?.login"  :color="'grey'"  dark class="text-none cursor-pointer">Login</Button>
        <Button  :href="store.global?.link?.register" :color="'warning'"  class="text-none cursor-pointer">Daftar sekarang</Button>
      </div>

      <!-- Mobile Burger Icon -->
      <!-- <Button icon class="d-md-none" @click="menuOpen = !menuOpen">
        <v-icon>mdi-menu</v-icon>
      </Button> -->
    </v-container>
  </v-app-bar>

  <!-- Desktop Submenu -->
  <v-app-bar app color="blue-darken-3" dark height="40" class="d-none d-md-flex">
    <v-container class="d-flex align-center justify-space-between">
      <v-row class="flex-nowrap" align="center" no-gutters>
        <Button  :to="'/'" class="text-none" :variant="'text'" :color="route.path === '/' ? 'warning' : 'white'">Tentang OLE777</Button>
        <Button  :to="'/komisi'" class="text-none" :variant="'text'" :color="route.path === '/komisi' ? 'warning' : 'white'">Komisi</Button>
        <Button  :to="'/peraturan'" class="text-none" :variant="'text'" :color="route.path === '/peraturan' ? 'warning' : 'white'">Peraturan</Button>
        <Button  :to="'/pertanyanan'" class="text-none" :variant="'text'" :color="route.path === '/pertanyanan' ? 'warning' : 'white'"> Pertanyaan & Jawaban</Button>
      </v-row>
       <!-- Trigger Button -->
      <v-btn color="warning" class="text-none" @click="dialog = true" variant="elevated">OLE777 Official</v-btn>
    </v-container>
  </v-app-bar>

  <!-- Mobile Slide-Down Menu -->
  <!-- <transition name="slide-down">
    <div v-if="menuOpen" class="mobile-menu d-md-none">
      <v-list>
        <v-list-item  title="Tentang LTMPT" />
        <v-list-item  title="Beranda" />
        <v-list-item  title="Portofolio" />
        <v-list-item  title="Pendaftaran Akun" />
        <v-list-item  title="LTMPT Official" />
        <v-divider />
        <v-list-item  title="Login" />
        <v-list-item  title="Daftar Sekarang" />
      </v-list>
    </div>
  </transition> -->


   <!-- Contact Form Dialog -->
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title class="text-h6">Message</v-card-title>
      <v-card-text>
        <v-form ref="formRef" @submit.prevent="submitForm">
          <v-text-field v-model="form.fullname" label="Fullname" :rules="[r.required]" />
          <v-text-field v-model="form.email" label="Email" :rules="[r.required, r.email]" />
          <v-text-field v-model="form.subject" label="Subject" :rules="[r.required]" />
          <v-textarea v-model="form.message" label="Message" :rules="[r.required]" rows="4" />
          <div>
            <v-spacer />
            <v-btn text @click="dialog = false">Cancel</v-btn>
            <v-btn color="warning" type="submit">Submit</v-btn>
          </div>
        </v-form>
      </v-card-text>
      <!-- <v-card-actions>
        <v-spacer />
            <v-btn text @click="dialog = false">Batal</v-btn>
            <v-btn color="warning" @click="submitForm">Submit</v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { storeData } from '../../stores';
import { useRoute } from 'vue-router';
import apiClient from '@/utils/axios';
const route = useRoute()
const store = storeData()
const menuOpen = ref(false)
const dialog = ref(false)
const formRef = ref(null)
const form = ref({
  fullname: '',
  email: '',
  subject: '',
  message: ''
})

const r = {
  required: v => !!v || 'Required',
  email: v => /.+@.+\..+/.test(v) || 'Email required'
}

const submitForm = async () => {
  if (formRef.value?.validate()) {
    const payload = new FormData()
        payload.append('fullname', form.value.fullname)
        payload.append('email', form.value.email)
        payload.append('subject', form.value.subject)
        payload.append('message', form.value.message)

    try {
      await apiClient.post('/sendMessage', payload)
      alert('Send!')
      dialog.value = false
    } catch (err) {
      alert('Failed to send message.')
    }
  }
}
</script>

<style scoped>
.bar-color{
    background-color: #001E5A !important;
}
.mobile-menu {
  position: absolute;
  top: 64px; /* match app bar height */
  left: 0;
  right: 0;
  background-color: #0D47A1;
  z-index: 10;
  padding: 16px;
}

/* Slide-down transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
