<template>
  <div class="container mt-4">

    <h2>❤️ Wishlist</h2>

    <div v-if="wishlist.items.length === 0">
      No items in wishlist
    </div>

    <div v-for="item in wishlist.items" :key="item.id" class="card p-2 mb-2">
      {{ item.title }}
    </div>

  </div>
</template>

<script setup>
import { useWishlistStore } from '@/stores/wishlist'
const wishlist = useWishlistStore()
</script>