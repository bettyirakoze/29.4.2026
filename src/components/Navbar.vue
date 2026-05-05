<template>
  <nav class="navbar navbar-dark bg-primary p-3">
    <div class="container">
      <router-link to="/" class="navbar-brand">🇷🇼 Kigali Tech</router-link>

      <div>
        <router-link to="/products" class="btn btn-light btn-sm">Products</router-link>
        <router-link to="/cart" class="btn btn-warning btn-sm ms-2">Cart</router-link>
        <router-link to="/wishlist" class="btn btn-danger btn-sm ms-2">Wishlist</router-link>
      </div>
    </div>
  </nav>
</template>