<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  beerName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <li class="main-list-item">{{ props.beerName }}</li>
</template>

<style scoped>
.main-list-item {
  color: #fff;
  border-bottom: solid 2px #222;
  padding: 0.3rem;
}
</style>
