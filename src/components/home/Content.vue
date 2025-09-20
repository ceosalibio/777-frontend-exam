<template>
    <div class="content">

        <v-container>
            <div v-html="store.homepage.content"></div>
            <v-row justify="center" align="center" class="ga-8 mt-10">
                <v-col
                    cols="12"
                    sm="6"
                    md="2"
                    v-for="slide in store.homepage.services"
                    :key="slide"
                    class="d-flex flex-column align-center text-center"
                >
                <div>
                    <v-img
                        :src="slide.img"
                        cover
                        width="70px"
                    />
                </div>
                <div>
                    <p class="text-title">{{ slide.title }}</p>
                </div>
                <div>
                    <p >{{ slide.description }}</p>
                </div>
                
      </v-col>
    </v-row>
        </v-container>
    </div>

    
</template>

<script setup>
import { storeData } from '@/stores'
const store = storeData()
</script>
<style scoped>


:deep(.steps) {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

:deep(.steps li) {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  font-size: 14px;
  color: #505050;
}

:deep(.steps li span) {
  display: inline-block;
  min-width: 24px;
  height: 24px;
  margin-right: 10px;
  background-color: #FFC107;
  color: #f5f6f8;
  font-weight: bold;
  text-align: center;
  line-height: 24px;
  border-radius: 10%;
  font-size: 13px;
}

/* Optional: style paragraphs and bold text inside v-html */
:deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #505050;
}

:deep(b) {
  font-size: 1.1rem;
  color: #505050;
}

.content {
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.03);
}

.text-title {
      font-size: 20px;
    margin-bottom: 10px;
    color: #00276C;
    font-weight: bold;
}

p{
    font-size: 14px;
    color: #505050;
}   
</style>
