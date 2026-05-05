<template>
  <div class="card mb-3">
    <img :src="product.image" height="200" />

    <div class="card-body">
      <h6>{{ product.title }}</h6>
      <p>${{ product.price }}</p>

      <button @click="cart.add(product)" class="btn btn-primary btn-sm">
        Add to Cart
      </button>

      <router-link :to="`/products/${product.id}`" class="btn btn-link">
        View
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const props = defineProps(['product'])
const cart = useCartStore()
</script>