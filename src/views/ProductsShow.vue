<template>
  <div>
    <main>
      <!-- Hero Area Start-->
      <div class="slider-area">
        <div class="single-slider slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>{{ product.name }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero Area End-->
      <!--================Single Product Area =================-->
      <div class="product_image_area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="product_img_slide owl-carousel">
                <div class="single_product_img">
                  <img :src="image" alt="" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="single_product_text text-center">
                <h3>
                  {{ product.name }}
                </h3>
                <p>
                  {{ product.description }}
                </p>
                <div class="card_area">
                  <div class="product_count_area">
                    <p>Quantity</p>
                    <div class="product_count d-inline-block">
                      <span v-on:click="decrease()" class="product_count_item inumber-decrement">
                        <i class="ti-minus"></i>
                      </span>
                      <input class="product_count_item input-number" type="text" :value="counter" min="0" max="10" />
                      <span v-on:click="increase()" class="product_count_item number-increment">
                        <i class="ti-plus"></i>
                      </span>
                    </div>
                    <p>${{ (product.price * counter).toFixed(2) }}</p>
                  </div>
                  <div class="add_to_cart">
                    <a href="/cart" v-on:click="cartProduct()" class="btn_3">add to cart</a>
                  </div>
                  <div class="add_to_cart">
                    <a href="/shop" class="btn_3">Continue Shopping</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--================End Single Product Area =================-->
      <!-- subscribe part here -->
      <section class="subscribe_part section_padding">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="subscribe_part_content">
                <h2>Get promotions & updates!</h2>
                <p>
                  Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources
                  credibly innovate granular internal .
                </p>
                <div class="subscribe_form">
                  <input type="email" placeholder="Enter your mail" />
                  <a href="#" class="btn_1">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- subscribe part end -->
    </main>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      product: {},
      image: {},
      counter: 1,
      newProductParams: {},
    };
  },
  created: function () {
    this.indexProduct();
  },
  methods: {
    indexProduct: function () {
      axios.get("/products/" + this.$route.params.id).then((response) => {
        console.log("products show", response);
        this.product = response.data;
        this.image = response.data.image_url;
      });
    },
    cartProduct: function () {
      this.newProductParams.product_id = this.product.id;
      this.newProductParams.quantity = this.counter;
      axios.post("/carted_products", this.newProductParams).then((response) => {
        console.log("carted products create", response);
        this.$router.push("/cart");
      });
    },
    showSupplier: function () {
      document.querySelector("#product-details").showModal();
    },
    increase: function () {
      this.counter++;
    },
    decrease: function () {
      if (this.counter > 0) {
        this.counter--;
      }
    },
  },
};
</script>
