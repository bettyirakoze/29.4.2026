<template>
  <div class="container mt-4">
    <h2>Login</h2>

    <button @click="login" class="btn btn-primary">
      Login (Mock)
    </button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const login = () => {
  auth.login()
  router.push('/')
}
</script>