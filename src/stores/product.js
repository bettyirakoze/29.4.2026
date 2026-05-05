import { defineStore } from 'pinia'
import API from '@/services/api'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false
  }),

  actions: {
    async fetchProducts() {
      this.loading = true
      const res = await API.get('/products')
      this.products = res.data
      this.loading = false
    },

    async fetchOne(id) {
      const res = await API.get(`/products/${id}`)
      return res.data
    }
  }
})