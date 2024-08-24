<script lang="ts" setup>
import { onMounted } from 'vue'
import { useStore } from '@/store/store'
import MainContainerItem from './MainContainerItem.vue'

const store = useStore()
onMounted(() => store.getData())
</script>

<template>
  <main class="main">
    <ul v-for="beer in store.beers"
      :key="beer.id"
      class="main-list" >
      <MainContainerItem
        :beerName="beer.name" />
    </ul>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.main-list {
  list-style: none;
  padding: 1rem;
  background: gray;
}
</style>
