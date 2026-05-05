<template>
  <div class="container mt-4">

    <h2>🛒 Cart</h2>

    <div v-if="cart.items.length === 0">
      <p>Your cart is empty</p>
    </div>

    <div v-for="item in cart.items" :key="item.id" class="card p-2 mt-2">

      <h6>{{ item.title }}</h6>
      <p>${{ item.price }}</p>

      <button class="btn btn-danger btn-sm" @click="cart.remove(item.id)">
        Remove
      </button>

    </div>

    <hr>

    <h4>Total: ${{ cart.total }}</h4>

    <router-link to="/checkout" class="btn btn-success">
      Checkout
    </router-link>

  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart"
const cart = useCartStore()
</script>