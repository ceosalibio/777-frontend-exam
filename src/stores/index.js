import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import apiClient from '@/utils/axios'

export const storeData = defineStore('store', () => {
  // State
  const global = ref({})
  const homepage = ref({})
  const komisi = ref({})
  const peraturan = ref({})
  const pertanyanan = ref({})



  // Actions
  async function fetchGlobalData() {
    try {
      const { data } = await apiClient.get('/global')
      global.value = data
    } catch (error) {
      console.error('Error fetching global data:', error)
    }
  }

  async function fetchHomepageData() {
    try {
      const { data } = await apiClient.get('/homepage')
      homepage.value = data
    } catch (error) {
      console.error('Error fetching homepage data:', error)
    }
  }

  async function fetchKomisiData() {
    try {
      const { data } = await apiClient.get('/komisi')
      komisi.value = data
    } catch (error) {
      console.error('Error fetching komisi data:', error)
    }
  }

    async function fetchPeraturanData() {
        try {
        const { data } = await apiClient.get('/peraturan')
        peraturan.value = data
        } catch (error) {
        console.error('Error fetching peraturan data:', error)
        }
    }

    async function fetchPertanyananData() {
        try {
        const { data } = await apiClient.get('/pertanyaanAndJawaban')    
        pertanyanan.value = data
        console.log(data)

        } catch (error) {
        console.error('Error fetching pertanyanan data:', error)
        }
    }

  return {  
        global,
        homepage,
        komisi,
        peraturan,
        pertanyanan,
        fetchGlobalData,
        fetchHomepageData,
        fetchKomisiData,
        fetchPeraturanData,
        fetchPertanyananData
    }
})

