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
                  <h2>Shop Womens</h2>
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
                  <!-- <a
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
                  </a> -->
                  <a
                    class="nav-item nav-link"
                    id="shoes-contact-tab"
                    data-toggle="tab"
                    href="#shoes-contact"
                    role="tab"
                    aria-controls="shoes-contact"
                    aria-selected="false"
                  >
                    Shoes
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="shorts-contact-tab"
                    data-toggle="tab"
                    href="#shorts-contact"
                    role="tab"
                    aria-controls="shorts-contact"
                    aria-selected="false"
                  >
                    Shorts
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="pants-contact-tab"
                    data-toggle="tab"
                    href="#pants-contact"
                    role="tab"
                    aria-controls="pants-contact"
                    aria-selected="false"
                  >
                    Pants
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="shirts-contact-tab"
                    data-toggle="tab"
                    href="#shirts-contact"
                    role="tab"
                    aria-controls="shirts-contact"
                    aria-selected="false"
                  >
                    Shirts
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="jackets-contact-tab"
                    data-toggle="tab"
                    href="#jackets-contact"
                    role="tab"
                    aria-controls="jackets-contact"
                    aria-selected="false"
                  >
                    Jackets
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="hats-contact-tab"
                    data-toggle="tab"
                    href="#hats-contact"
                    role="tab"
                    aria-controls="hats-contact"
                    aria-selected="false"
                  >
                    Hats
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
                    <option value="">18 per page</option>
                    <option value="">24 per page</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <!-- Nav Card -->
          <div class="tab-content" id="nav-tabContent">
            <!-- card all -->
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
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
                        <a :href="`/products/${product.id}`">{{ product.supplier.name }}</a>
                        <br />
                        <a :href="`/products/${product.id}`">{{ product.name }}</a>
                      </h3>
                      <span>$ {{ product.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card male -->
            <!-- <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
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
            </div> -->
            <!-- Card female -->
            <!-- <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
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
            </div> -->
            <!-- Card shoes -->
            <div class="tab-pane fade" id="shoes-contact" role="tabpanel" aria-labelledby="shoes-contact-tab">
              <div class="row">
                <div
                  v-for="product in shoeProducts"
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
            <!-- Card shorts -->
            <div class="tab-pane fade" id="shorts-contact" role="tabpanel" aria-labelledby="shorts-contact-tab">
              <div class="row">
                <div
                  v-for="product in shortProducts"
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
            <!-- Card pants -->
            <div class="tab-pane fade" id="pants-contact" role="tabpanel" aria-labelledby="pants-contact-tab">
              <div class="row">
                <div
                  v-for="product in pantProducts"
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
            <!-- Card shirts -->
            <div class="tab-pane fade" id="shirts-contact" role="tabpanel" aria-labelledby="shirts-contact-tab">
              <div class="row">
                <div
                  v-for="product in shirtProducts"
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
            <!-- Card jackets -->
            <div class="tab-pane fade" id="jackets-contact" role="tabpanel" aria-labelledby="jackets-contact-tab">
              <div class="row">
                <div
                  v-for="product in jacketProducts"
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
            <!-- Card hats -->
            <div class="tab-pane fade" id="hats-contact" role="tabpanel" aria-labelledby="hats-contact-tab">
              <div class="row">
                <div v-for="product in hatProducts" v-bind:key="product.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      femaleProducts: [],
    };
  },
  created: function () {
    this.indexFemaleProducts();
  },
  methods: {
    indexFemaleProducts: function () {
      axios.get("/female").then((response) => {
        console.log("female products index", response);
        this.femaleProducts = response.data;
      });
    },
  },
};
</script>
