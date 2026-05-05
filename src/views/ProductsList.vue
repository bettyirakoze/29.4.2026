<template>
  <div class="page">

    <!-- TITLE -->
    <h2 class="title">📱 Products</h2>

    <!-- GRID -->
    <div class="grid">

      <div v-for="p in products" :key="p.id" class="card">

        <!-- IMAGE -->
        <div class="image">
          <img :src="p.image" alt="product" />
        </div>

        <!-- CONTENT -->
        <div class="content">

          <!-- TITLE (SAFE) -->
          <h3 class="title-text">
            {{ p.title || 'Product item' }}
          </h3>

          <!-- DESCRIPTION -->
          <p class="desc">
            High quality fashion item designed for comfort, durability and modern style.
          </p>

          <!-- STAR RATING -->
          <div class="rating">
            <span v-for="i in 5" :key="i">
              {{ i <= Math.round(p.rating?.rate ?? 4) ? '⭐' : '☆' }}
            </span>
            <small>({{ p.rating?.rate ?? 4 }})</small>
          </div>

          <!-- PRICE -->
          <p class="price">
            ${{ p.price ?? 0 }}
          </p>

          <!-- BUTTON -->
          <button @click="cart.add(p)">
            Add to Cart
          </button>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()
const products = ref([])

onMounted(async () => {
  const res = await axios.get("https://fakestoreapi.com/products")
  products.value = res.data
})
</script>

<style>
/* PAGE */
.page {
  padding: 30px;
  min-height: 100vh;
  background: radial-gradient(circle at top, #1a1f2e, #0b0b0f);
  color: white;
}

/* TITLE */
.title {
  font-size: 28px;
  margin-bottom: 25px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 22px;
}

/* CARD */
.card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;

  overflow: hidden;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-10px);
  border-color: rgba(255,255,255,0.2);
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
}

/* IMAGE */
.image {
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.03);
}

.image img {
  max-height: 150px;
  object-fit: contain;
}

/* CONTENT */
.content {
  padding: 14px;
}

/* TITLE */
.title-text {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  display: -webkit-box;
  
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: rgba(255,255,255,0.9);
  margin-bottom: 6px;
}

/* DESCRIPTION */
.desc {
  font-size: 12px;
  line-height: 1.3;

  display: -webkit-box;
  
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: rgba(176, 160, 160, 0.6);
  margin-top: 6px;
}

/* STAR RATING */
.rating {
  margin: 8px 0;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: gold;
}

.rating small {
  color: white;
  opacity: 0.6;
  font-size: 11px;
}

/* PRICE */
.price {
  color: #ffd166;
  font-weight: bold;
  margin-bottom: 10px;
}

/* BUTTON */
button {
  width: 100%;
  padding: 10px;

  border-radius: 12px;
  border: none;

  background: rgb(20, 172, 27);
  color: black;

  cursor: pointer;
  font-weight: 500;

  transition: 0.2s;
}

button:hover {
  transform: scale(1.04);
  background: #e6e6e6;
}
</style>