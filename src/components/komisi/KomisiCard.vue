<template>
  <v-container class="affiliate-content">
    <!-- Button Tabs -->
    <div class="button-tabs d-flex flex-wrap ga-2">
      <v-btn
        v-for="section in store.komisi"
        :key="section.id"
        :color="activeTab === section.id ? 'warning' : 'grey'"
        variant="elevated"
        class="text-none ma-2"
        @click="activeTab = section.id"
      >
        {{ section.title }}
      </v-btn>
    </div>

    <!-- Content Display -->
     <v-card>
        <v-card-text>
            <div
                v-for="section in store.komisi"
                :key="section.id"
                v-show="activeTab === section.id"
                class="section-body"
                v-html="section.content"
            />
        </v-card-text>
         
     </v-card>
   
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import { storeData } from '@/stores'

const store = storeData()
const activeTab = ref(null)

watch(
  () => store.komisi,
  (newVal) => {
    if (newVal?.length && !activeTab.value) {
      activeTab.value = newVal[0].id
    }
  },
  { immediate: true }
)
</script>
<style scoped>
.section-body {
  margin: auto 16px;
}

:deep(p){
    margin-top: 16px;
    font-size: 14px;
    color: #505050;   
}

:deep(.comm-table-1){

    width: 100%;
    border-collapse: separate; /* allows border-radius */
    border-spacing: 0;
    margin-top: 16px;
    border: .5px solid #2a3a5f;
    border-radius: 8px;
    overflow: hidden;
}

:deep(.table-desc){
    font-size: 14px;
    color: #505050;

}
/* Header styling */
:deep(.comm-table-1 thead tr:first-child th) {
  background-color: #1a2a4e;
  padding: 10px;
  text-align: center;
  font-weight: 600;
  border: .5px solid #424345;
  font-size: 20px;
  color: #fff;

}

:deep(.comm-table-1 thead tr:nth-child(2) th) {
  background-color: transparent;
  border: .5px solid #424345;
  padding: 10px;
  font-weight: 700;
}


/* Cell styling */
:deep(.comm-table-1 td) {
  padding: 10px;
border: .5px solid #424345;
text-align: center;
color: #505050;
}


:deep(.top-space){
    margin-top: 16px;
}

:deep(li){
    margin-top: 16px;
    color: #505050;
}
</style>


