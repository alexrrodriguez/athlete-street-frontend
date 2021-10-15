<template>
  <div class="shop">
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
                <div
                  v-for="product in maleProducts"
                  v-bind:key="product.id"
                  class="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
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
                <div
                  v-for="product in femaleProducts"
                  v-bind:key="product.id"
                  class="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
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
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      products: [],
      maleProducts: [],
      femaleProducts: [],
    };
  },
  created: function () {
    this.indexProducts();
    this.indexMaleProducts();
    this.indexFemaleProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/products").then((response) => {
        console.log("products index", response);
        this.products = response.data;
      });
    },
    indexMaleProducts: function () {
      axios.get("/male").then((response) => {
        console.log("male products index", response);
        this.maleProducts = response.data;
      });
    },
    indexFemaleProducts: function () {
      axios.get("/female").then((response) => {
        console.log("female products index", response);
        this.femaleProducts = response.data;
      });
    },
  },
};
</script>
