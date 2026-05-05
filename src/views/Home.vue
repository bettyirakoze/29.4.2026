<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero">

      <p class="tag">🇷🇼 Kigali Tech Store</p>

      <h1>
        Smart shopping for <span>modern life</span>
      </h1>

      <p class="sub">
        Search products instantly or browse all items
      </p>

      <!-- SEARCH -->
      <div class="search-box">
        <input
          v-model="search"
          type="text"
          placeholder="Search phones, laptops, accessories..."
        />
      </div>

      <router-link to="/products" class="cta">
        Browse All Products
      </router-link>

    </section>

    <!-- SEARCH RESULTS -->
    <section v-if="search" class="results">

      <h3>🔍 Results</h3>

      <div v-if="filtered.length === 0">
        No products found
      </div>

      <div class="result-grid">

        <div
          v-for="p in filtered"
          :key="p.id"
          class="result-card"
        >

          <!-- IMAGE -->
          <img :src="p.image" alt="product" />

          <!-- INFO -->
          <div class="info">
            <p class="name">{{ p.title }}</p>
            <p class="price">${{ p.price }}</p>
          </div>

        </div>

      </div>

    </section>

    <!-- SOURCE -->
    <section class="source">
      📡 Products from https://fakestoreapi.com
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import axios from "axios"

const search = ref("")
const products = ref([])

onMounted(async () => {
  const res = await axios.get("https://fakestoreapi.com/products")
  products.value = res.data
})

const filtered = computed(() => {
  return products.value.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<style>
/* PAGE */
.home {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1a1f2e, #0b0b0f);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  padding: 40px;
}

/* HERO */
.hero h1 {
  font-size: 50px;
  margin: 10px 0;
}

.hero h1 span {
  color: #ffd166;
}

.tag {
  opacity: 0.6;
}

.sub {
  opacity: 0.6;
  margin-bottom: 20px;
}

/* SEARCH */
.search-box {
  width: 100%;
  max-width: 420px;
}

.search-box input {
  width: 100%;
  padding: 12px 16px;

  border-radius: 12px;
  border: none;
  outline: none;

  background: rgba(255,255,255,0.08);
  color: white;
}

/* BUTTON */
.cta {
  margin-top: 20px;
  padding: 12px 22px;
  background: white;
  color: black;
  text-decoration: none;
  border-radius: 12px;
  font-weight: bold;
  transition: 0.3s;
}

.cta:hover {
  transform: scale(1.05);
}

/* RESULTS */
.results {
  margin-top: 40px;
  width: 100%;
  max-width: 800px;
}

/* GRID */
.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

/* CARD */
.result-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;

  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  transition: 0.2s;
}

.result-card:hover {
  transform: translateY(-4px);
}

/* IMAGE */
.result-card img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

/* INFO */
.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 12px;
  opacity: 0.9;

  display: -webkit-box;
  
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price {
  font-size: 12px;
  color: #ffd166;
}

/* SOURCE */
.source {
  margin-top: 50px;
  opacity: 0.6;
  font-size: 13px;
}
</style>