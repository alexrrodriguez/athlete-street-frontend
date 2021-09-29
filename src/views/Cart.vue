<template>
  <div class="cart-index">
    <h1>Users Carted Products</h1>
    <div v-for="carted_product in cartedProducts" :key="carted_product.id">
      <img :src="carted_product.product.image_url" alt="" />
      <h1>{{ carted_product.product.name }}</h1>
      <p>{{ carted_product.product.price }}</p>
      <router-link v-bind:to="`/products/${carted_product.product.id}`">More details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      cartedProducts: [],
    };
  },
  created: function () {
    this.indexCart();
  },
  methods: {
    indexCart: function () {
      axios.get("/carted_products").then((response) => {
        console.log("carted products index", response);
        this.cartedProducts = response.data;
      });
    },
  },
};
</script>
