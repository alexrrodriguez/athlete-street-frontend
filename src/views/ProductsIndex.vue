<template>
  <div class="shop">
    <h1>All Products</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <img :src="product.image_url" alt="product.name" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      products: [],
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/products").then((response) => {
        console.log("products index", response);
        this.products = response.data;
      });
    },
  },
};
</script>
