import { defineStore } from 'pinia'
import { IBeer } from '@/interfaces/IBeer'

export const useStore = defineStore('store', {
  state: () => ({
    beers: [] as IBeer[],
  }),
  actions: {
    getData() {
      this.beers = [
        {
          id: 1,
          name: 'pilsen',
        },
        {
          id: 2,
          name: 'brahma',
        },
        {
          id: 3,
          name: 'stella artois',
        },
        {
          id: 4,
          name: 'skol',
        },
        {
          id: 5,
          name: 'sub zero',
        },
        {
          id: 6,
          name: 'heineken',
        },
      ]
    },
  },
})
