<template>
    <v-btn 
    :color="color" 
    :variant="variant"
    :to="toPage"
    class="text-none cursor-pointer">
        <slot></slot>
    </v-btn>
</template>
<script setup>
    const props = defineProps({
        color: {
            type: String,
            default: 'primary'
        },
        variant: {
            type: String,
            default: 'elevated'
        },
        toPage: {
            type: String,
            default: null
        }
    })
</script>