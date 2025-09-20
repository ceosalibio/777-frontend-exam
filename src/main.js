import { createApp } from 'vue'
import App from './App.vue'
import Particles from 'vue3-particles'

// Vuetify setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Router and plugins
import router from './router'
import ui from './plugins/ui'

// Pinia setup
import { createPinia } from 'pinia'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()

const app = createApp(App)
app.use(Particles)
app.use(vuetify)
app.use(router)
app.use(ui)
app.use(pinia)

app.mount('#app')
