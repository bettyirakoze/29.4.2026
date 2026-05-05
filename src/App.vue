<template>
  <div class="app">

    <!-- GLASS NAVBAR -->
    <nav class="nav">
      <router-link class="logo" to="/">
        🇷🇼 Kigali Tech
      </router-link>

      <div class="links">
        <router-link to="/products">Explore</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/wishlist">Wishlist</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/login" class="login">Login</router-link>
      </div>
    </nav>

    <!-- HERO / WELCOME SCREEN -->
    <section class="hero">

      <h1>Build. Explore. Shop.</h1>

      <p>
        A modern tech experience inspired by award-winning web design.
      </p>

      <router-link to="/products" class="cta">
        Start Exploring
      </router-link>

    </section>

    <!-- PAGE CONTENT -->
    <div class="page">
      <router-view />
    </div>

  </div>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui;
  background: radial-gradient(circle at top, #1a1f2e, #0b0b0f);
  color: white;
}

/* APP */
.app {
  min-height: 100vh;
}

/* NAVBAR (AWWWARDS STYLE) */
.nav {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 22px;

  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;

  z-index: 1000;
}

/* LOGO */
.logo {
  font-weight: bold;
  text-decoration: none;
  color: white;
  letter-spacing: 1px;
}

/* LINKS */
.links {
  display: flex;
  gap: 18px;
  align-items: center;
}

.links a {
  text-decoration: none;
  color: white;
  opacity: 0.7;
  font-size: 14px;
  transition: 0.2s;
}

.links a:hover {
  opacity: 1;
}

/* LOGIN SPECIAL */
.login {
  padding: 6px 12px;
  background: white;
  color: black !important;
  border-radius: 10px;
  font-weight: bold;
}

/* HERO SECTION */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 0 20px;
}

.hero h1 {
      color: rgba(193, 198, 202, 0.491);
  font-size: 60px;
  margin: 0;
  letter-spacing: -1px;
}

.hero p {
  opacity: 0.7;
  margin-top: 10px;
  color: rgb(99, 101, 103);
  max-width: 500px;
}

/* CTA BUTTON */
.cta {
  margin-top: 25px;
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

/* ROUTER PAGE */
.page {
  padding-top: 120px;
}
</style>