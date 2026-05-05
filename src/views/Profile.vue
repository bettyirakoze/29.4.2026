<template>
  <div class="profile">

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <h3>👤 My Account</h3>

      <router-link to="/profile/orders">📦 Orders</router-link>
      <router-link to="/profile/wishlist">❤️ Wishlist</router-link>
      <router-link to="/profile/settings">⚙ Settings</router-link>

    </aside>

    <!-- CONTENT -->
    <main class="content">
      <router-view />
    </main>

  </div>
</template>

<style>
.profile {
  display: flex;
  min-height: 100vh;
  background: #0b0b0f;
  color: white;
}

/* SIDEBAR */
.sidebar {
  width: 220px;
  padding: 20px;
  background: rgba(255,255,255,0.04);
  border-right: 1px solid rgba(255,255,255,0.08);
}

.sidebar a {
  display: block;
  color: white;
  text-decoration: none;
  margin: 12px 0;
  opacity: 0.7;
}

.sidebar a:hover {
  opacity: 1;
}

/* CONTENT */
.content {
  flex: 1;
  padding: 20px;
}
</style>