<template>
  <div>
    <img :src="product.image_url" alt="product.name" />
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
    <h4>Supplier:</h4>
    <p>{{ product.supplier.name }}</p>
    <button @click="showSupplier()">Contact {{ product.supplier.name }}</button>
    <br />
    <br />
    <hr />
    <router-link to="/">Back to all home</router-link>
    <dialog type="button" id="product-details">
      <form method="dialog">
        <h2>{{ product.supplier.name }}</h2>
        <p>{{ product.supplier.email }}</p>
        <p>1-800-{{ product.supplier.phone_number }}</p>
        <button>Back</button>
      </form>
    </dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      product: {},
    };
  },
  created: function () {
    axios.get("/products/" + this.$route.params.id).then((response) => {
      console.log("products show", response);
      this.product = response.data;
    });
  },
  methods: {
    showSupplier: function () {
      document.querySelector("#product-details").showModal();
    },
  },
};
</script>
