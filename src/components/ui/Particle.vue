<template>
  <Particles
    id="tsparticles"
    :options="options"
    class="particles-bg"
  />
</template>

<script setup>
const options = {
  background: {
    color: { value: '#001E5A' },
  },
  particles: {
    number: { value: 80 },
    color: { value: '#FFC107' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 1 },
  },
}
</script>

<style scoped>
.particles-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
