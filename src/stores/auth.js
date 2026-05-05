import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null
  }),

  getters: {
    isLoggedIn: (state) => !!state.token
  },

  actions: {
    login() {
      this.token = 'fake-jwt-token'
      localStorage.setItem('token', this.token)
    },

    logout() {
      this.token = null
      localStorage.removeItem('token')
    }
  }
})