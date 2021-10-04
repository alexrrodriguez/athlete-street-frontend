<template>
  <div class="shop">
    <!--? Preloader Start -->
    <div id="preloader-active">
      <div class="preloader d-flex align-items-center justify-content-center">
        <div class="preloader-inner position-relative">
          <div class="preloader-circle"></div>
          <div class="preloader-img pere-text">
            <img src="assets/img/logo/athlete-street.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Preloader Start -->
    <main>
      <!-- Hero Area Start-->
      <div class="slider-area">
        <div class="single-slider slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>Shop</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero Area End-->
      <!-- Latest Products Start -->
      <section class="popular-items latest-padding">
        <div class="container">
          <div class="row product-btn justify-content-between mb-40">
            <div class="properties__button">
              <!--Nav Button  -->
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    All
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Mens
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Womens
                  </a>
                </div>
              </nav>
              <!--End Nav Button  -->
            </div>
            <!-- Grid and List view -->
            <div class="grid-list-view"></div>
            <!-- Select items -->
            <div class="select-this">
              <form action="#">
                <div class="select-itms">
                  <select name="select" id="select1">
                    <option value="">12 per page</option>
                    <option value="">24 per page</option>
                    <option value="">36 per page</option>
                    <option value="">48 per page</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <!-- Nav Card -->
          <div class="tab-content" id="nav-tabContent">
            <!-- card one -->
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div class="row">
                <div v-for="product in products" v-bind:key="product.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div class="single-popular-items mb-50 text-center">
                    <div class="popular-img">
                      <a :href="`/products/${product.id}`">
                        <img class="home-img" :src="product.image_url" :alt="product.name" />
                      </a>
                      <div class="img-cap">
                        <a :href="`/products/${product.id}`">
                          <span>Add To Cart</span>
                        </a>
                      </div>
                      <div class="favorit-items">
                        <span class="flaticon-heart"></span>
                      </div>
                    </div>
                    <div class="popular-caption">
                      <h3>
                        <a :href="`/products/${product.id}`">{{ product.name }}</a>
                      </h3>
                      <span>$ {{ product.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card two -->
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div class="row">
                <div v-for="product in products" v-bind:key="product.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div class="single-popular-items mb-50 text-center">
                    <div class="popular-img">
                      <a :href="`/products/${product.id}`">
                        <img class="home-img" :src="product.image_url" :alt="product.name" />
                      </a>
                      <div class="img-cap">
                        <a :href="`/products/${product.id}`">
                          <span>Add To Cart</span>
                        </a>
                      </div>
                      <div class="favorit-items">
                        <span class="flaticon-heart"></span>
                      </div>
                    </div>
                    <div class="popular-caption">
                      <h3>
                        <a :href="`/products/${product.id}`">{{ product.name }}</a>
                      </h3>
                      <span>$ {{ product.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card three -->
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div class="row">
                <div v-for="product in products" v-bind:key="product.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div class="single-popular-items mb-50 text-center">
                    <div class="popular-img">
                      <a :href="`/products/${product.id}`">
                        <img class="home-img" :src="product.image_url" :alt="product.name" />
                      </a>
                      <div class="img-cap">
                        <a :href="`/products/${product.id}`">
                          <span>Add To Cart</span>
                        </a>
                      </div>
                      <div class="favorit-items">
                        <span class="flaticon-heart"></span>
                      </div>
                    </div>
                    <div class="popular-caption">
                      <h3>
                        <a :href="`/products/${product.id}`">{{ product.name }}</a>
                      </h3>
                      <span>$ {{ product.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Nav Card -->
        </div>
      </section>
      <!-- Latest Products End -->
    </main>
    <!-- <h1>All Products</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <img :src="product.image_url" :alt="product.name" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
    </div> -->
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
