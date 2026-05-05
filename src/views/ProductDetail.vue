<template>
  <div class="container mt-4" v-if="product">
    <h3>{{ product.title }}</h3>
    <img :src="product.image" height="200" />
    <p>{{ product.description }}</p>
    <h4>${{ product.price }}</h4>

    <button @click="cart.add(product)" class="btn btn-primary">
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const store = useProductsStore()
const cart = useCartStore()

const product = ref(null)

onMounted(async () => {
  product.value = await store.fetchOne(route.params.id)
})
</script>