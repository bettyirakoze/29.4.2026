import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || []
  }),

  getters: {
    total: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  },

  actions: {
    add(product) {
      const existing = this.items.find(i => i.id === product.id)

      if (existing) {
        existing.qty++
      } else {
        this.items.push({ ...product, qty: 1 })
      }

      this.save()
    },

    remove(id) {
      this.items = this.items.filter(i => i.id !== id)
      this.save()
    },

    updateQty(id, qty) {
      const item = this.items.find(i => i.id === id)
      if (item) item.qty = qty
      this.save()
    },

    save() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    }
  }
})