<template>
  <div class="orders-index">
    <h1>Users Ordered Products</h1>
    <div v-for="order in orders" :key="order.id">
      <h2>Order ID:</h2>
      <p>{{ order.id }}</p>
      <p>Subtotal:</p>
      <p>{{ order.money_math[0] }}</p>
      <p>Tax:</p>
      <p>{{ order.money_math[1] }}</p>
      <p>Total:</p>
      <p>{{ order.money_math[2] }}</p>
      <div v-for="product in order.products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <img :src="product.image_url" :alt="product.name" />
        <p>{{ product.price }}</p>
        <div v-for="quantity in order.carted_products" :key="quantity.id">
          <p v-if="quantity.product_id == product.id">Quantity: {{ quantity.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      orders: [],
    };
  },
  created: function () {
    this.indexOrders();
  },
  methods: {
    indexOrders: function () {
      axios.get("/orders").then((response) => {
        console.log("orders index", response);
        this.orders = response.data;
      });
    },
  },
};
</script>
