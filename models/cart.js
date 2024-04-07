const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_id: [
      {
        type: String,
        required: true,
      },
    ],
    total_amount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
