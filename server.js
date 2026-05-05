import express from "express"
import cors from "cors"
import Stripe from "stripe"

const app = express()

app.use(cors())
app.use(express.json())

// 🔐 Stripe secret key (PUT YOUR REAL KEY HERE)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Home test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀")
})

// 💳 CREATE STRIPE CHECKOUT SESSION (IMPORTANT)
app.post("/checkout", async (req, res) => {
  try {
    const { amount } = req.body

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Kigali Tech Store Order"
            },
            unit_amount: amount
          },
          quantity: 1
        }
      ],
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cart"
    })

    res.json({ url: session.url })

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})