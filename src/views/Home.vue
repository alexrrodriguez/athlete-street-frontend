<template>
  <div class="home">
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
      <!--? slider Area Start -->
      <div class="slider-area">
        <div class="slider-active">
          <!-- Single Slider -->
          <div class="single-slider slider-height d-flex align-items-center slide-bg">
            <div class="container">
              <div class="row justify-content-between align-items-center">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <div class="hero__caption">
                    <h2>Welcome To</h2>
                    <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Athlete Street</h1>
                    <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">
                      Find your perfect style of athletic wear and accessories
                    </p>
                    <!-- Hero-btn -->
                    <div class="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                      <a href="/shop" class="btn hero-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                  <div class="hero__img" data-animation="bounceIn" data-delay=".4s">
                    <img src="assets/img/hero/pngwing.com.png" alt="" class="heartbeat home-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- slider Area End-->
      <!-- ? New Product Start -->
      <section class="new-product-area section-padding30">
        <div class="container">
          <!-- Section tittle -->
          <div class="row">
            <div class="col-xl-12">
              <div class="section-tittle mb-70">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="new_product in news" v-bind:key="new_product.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div class="single-new-pro mb-30 text-center">
                <a :href="`/products/${new_product.id}`">
                  <div class="product-img">
                    <img :src="new_product.image_url" :alt="new_product.name" />
                  </div>
                  <div class="product-caption">
                    <h3>
                      <a :href="`/products/${new_product.id}`">{{ new_product.supplier.name }}</a>
                      <br />
                      <a :href="`/products/${new_product.id}`">{{ new_product.name }}</a>
                    </h3>
                    <span>$ {{ new_product.price }}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--  New Product End -->
      <!--? Gallery Area Start -->
      <div class="gallery-area">
        <div class="container-fluid p-0 fix">
          <div class="row">
            <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
              <a href="/shop">
                <div class="single-gallery mb-30">
                  <div
                    class="gallery-img big-img"
                    style="background-image: url(assets/img/gallery/adidas-mens-shorts.jpeg)"
                  ></div>
                </div>
              </a>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <a href="/shop">
                <div class="single-gallery mb-30">
                  <div
                    class="gallery-img big-img"
                    style="background-image: url(assets/img/gallery/nike-mens-shoe1.jpeg)"
                  ></div>
                </div>
              </a>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-12">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                  <a href="/shop">
                    <div class="single-gallery mb-30">
                      <div
                        class="gallery-img small-img"
                        style="background-image: url(assets/img/gallery/Puma-womens-shorts.webp)"
                      ></div>
                    </div>
                  </a>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                  <a href="/shop">
                    <div class="single-gallery mb-30">
                      <div
                        class="gallery-img small-img"
                        style="background-image: url(assets/img/gallery/addidas-mens-shoe3.jpeg)"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Gallery Area End -->
      <!--? Popular Items Start -->
      <div class="popular-items section-padding30">
        <div class="container">
          <!-- Section tittle -->
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-10">
              <div class="section-tittle mb-70 text-center">
                <h2>Popular Items</h2>
                <p>Shop some of todays most popular athletic wear.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="popular in populars" v-bind:key="popular.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div class="single-popular-items mb-50 text-center">
                <div class="popular-img">
                  <a :href="`/products/${popular.id}`">
                    <img class="product-img" :src="popular.image_url" :alt="popular.name" />
                  </a>
                  <div class="img-cap">
                    <span>Add to cart</span>
                  </div>
                  <div class="favorit-items">
                    <span class="flaticon-heart"></span>
                  </div>
                </div>
                <div class="popular-caption">
                  <h3>
                    <a :href="`/products/${popular.id}`">{{ popular.supplier.name }}</a>
                    <br />
                    <a :href="`/products/${popular.id}`">{{ popular.name }}</a>
                  </h3>
                  <span>$ {{ popular.price }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Button -->
          <div class="row justify-content-center">
            <div class="room-btn pt-70">
              <a href="/shop" class="btn view-btn1">Shop More Products</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Popular Items End -->
      <!--? Video Area Start -->
      <div class="video-area">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="video-wrap">
                <div class="play-btn">
                  <a class="popup-video" href="https://www.youtube.com/watch?v=NP7oNGpH-LQ">
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Arrow -->
          <div class="thumb-content-box">
            <div class="thumb-content">
              <h3>Browse Products</h3>
              <a href="/shop"><i class="flaticon-arrow"></i></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Video Area End -->
      <!--? Watch Choice  Start-->
      <div class="watch-area section-padding30">
        <div class="container">
          <div class="row align-items-center justify-content-between padding-130">
            <div class="col-lg-5 col-md-6">
              <div class="watch-details mb-40">
                <h2>Mens Athletic Wear</h2>
                <p>
                  Shop Men's athletic wear today at Athlete Street. Save big on some of today's best athletic wear for
                  all your athletic needs. We have some of the best brands at the lowest prices!
                </p>
                <a href="/mens" class="btn">Shop Mens</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-10">
              <div class="choice-watch-img mb-40">
                <img src="assets/img/gallery/nike-mens-shoe1.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 col-md-6 col-sm-10">
              <div class="choice-watch-img mb-40">
                <img src="assets/img/gallery/Puma-womens-shorts.webp" alt="" />
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="watch-details mb-40">
                <h2>Womens Athletic Wear</h2>
                <p>
                  Shop Women's athletic wear today at Athlete Street. Save big on some of today's best athletic wear for
                  all your athletic needs. We have some of the best brands at the lowest prices!
                </p>
                <a href="/womens" class="btn">Shop Womens</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Watch Choice  End-->
    </main>
  </div>
</template>

<style>
.home-img {
  height: 36rem;
  width: 26rem;
}
.product-img {
  height: 360px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      populars: [],
      highlights: [],
      galleries: [],
      news: [],
    };
  },
  created: function () {
    this.newProducts();
    this.popularProducts();
    this.indexGallery();
  },
  methods: {
    newProducts: function () {
      axios.get("/new").then((response) => {
        console.log("new products index", response);
        this.news = response.data;
      });
    },
    popularProducts: function () {
      axios.get("/popular").then((response) => {
        console.log("popular products index", response);
        this.populars = response.data;
      });
    },
    indexGallery: function () {
      axios.get("/gallery").then((response) => {
        console.log("gallery products index", response);
        this.galleries = response.data;
      });
    },
  },
};
</script>
