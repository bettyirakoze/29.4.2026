<template>
  <div class="checkout">

    <h2>💳 Checkout</h2>

    <!-- 📍 ADDRESS FORM -->
    <section class="box">

      <h3>📍 Shipping Address</h3>

      <input v-model="form.name" placeholder="Full Name" />
      <input v-model="form.phone" placeholder="Phone" />
      <input v-model="form.city" placeholder="City" />
      <input v-model="form.address" placeholder="Street Address" />

    </section>

    <!-- 📦 ORDER REVIEW -->
    <section class="box">

      <h3>📦 Order Review</h3>

      <div v-for="item in cart.items" :key="item.id" class="item">
        <span>{{ item.title }}</span>
        <span>${{ item.price }}</span>
      </div>

    </section>

    <!-- 💰 TOTAL -->
    <h4 class="total">
      Total: ${{ cart.total }}
    </h4>

    <!-- 💳 PAY BUTTON -->
    <button class="pay-btn" @click="pay">
      Pay Now
    </button>

  </div>
</template>

<script setup>
import { reactive } from "vue"
import axios from "axios"
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()

// ADDRESS FORM
const form = reactive({
  name: "",
  phone: "",
  city: "",
  address: ""
})

// STRIPE PAYMENT
const pay = async () => {

  // simple validation
  if (!form.name || !form.address || !form.phone) {
    alert("Please fill all address fields")
    return
  }

  try {
    const res = await axios.post("http://localhost:3000/checkout", {
      amount: Math.round(cart.total * 100)
    })

    // redirect to Stripe checkout
    window.location.href = res.data.url

  } catch (error) {
    console.log(error)
    alert("Payment failed")
  }
}
</script>

<style>
.checkout {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  color: white;
}

/* BOX */
.box {
  background: rgba(255,255,255,0.05);
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 12px;
}

/* INPUTS */
input {
  width: 100%;
  padding: 10px;
  margin: 6px 0;

  border-radius: 8px;
  border: none;
  outline: none;

  background: rgba(248, 245, 245, 0.08);
  color: white;
}

/* ORDER ITEMS */
.item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 5px 0;
}

/* TOTAL */
.total {
  margin-top: 10px;
  color: #ffd166;
}

/* BUTTON */
.pay-btn {
  width: 100%;
  padding: 12px;

  background: white;
  border: none;
  border-radius: 10px;

  font-weight: bold;
  cursor: pointer;

  transition: 0.2s;
}

.pay-btn:hover {
  transform: scale(1.03);
}
</style>