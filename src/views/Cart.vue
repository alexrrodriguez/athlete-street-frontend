<template>
  <div class="cart-index">
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
                  <h2>Cart List</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section v-if="!isLoggedIn()" class="cart_area section_padding">
        <div class="container login-container">
          <h1>
            <a class="signup-login-link" href="/login">Login</a>
            to view cart!
          </h1>
        </div>
      </section>
      <!--================Cart Area =================-->
      <section v-if="isLoggedIn()" class="cart_area section_padding">
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="carted_product in cartedProducts" :key="carted_product.id">
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img :src="carted_product.product.image_url" :alt="carted_product.product.name" />
                        </div>
                        <div class="media-body">
                          <p>{{ carted_product.product.name }}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>${{ carted_product.product.price }}</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <span class="input-number-decrement minus-icon">
                          <i class="ti-minus"></i>
                        </span>
                        <input class="input-number" type="text" :value="carted_product.quantity" min="0" max="10" />
                        <span class="input-number-increment"><i class="ti-plus"></i></span>
                      </div>
                    </td>
                    <td>
                      <h5>${{ (carted_product.product.total * carted_product.quantity).toFixed(2) }}</h5>
                    </td>
                  </tr>
                  <tr class="bottom_button">
                    <td></td>
                    <td></td>
                    <td>
                      <div class="cupon_text float-right">
                        <a class="btn_1" href="/cart">Update Cart</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>${{ subtotal }}</h5>
                    </td>
                  </tr>
                  <tr class="shipping_area">
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Shipping</h5>
                    </td>
                    <td>
                      <div class="shipping_box">
                        <ul class="list">
                          <li>
                            Flat Rate: $5.00
                            <input type="radio" aria-label="Radio button for following text input" />
                          </li>
                          <li>
                            Free Shipping
                            <input type="radio" aria-label="Radio button for following text input" />
                          </li>
                          <li>
                            Flat Rate: $10.00
                            <input type="radio" aria-label="Radio button for following text input" />
                          </li>
                          <li>
                            Local Delivery: $2.00
                            <input type="radio" aria-label="Radio button for following text input" />
                          </li>
                        </ul>
                        <h6>
                          Calculate Shipping
                          <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </h6>
                        <select class="shipping_select">
                          <option value="1">USA</option>
                          <option value="2">UK</option>
                          <option value="4">India</option>
                        </select>
                        <select class="shipping_select section_bg">
                          <option value="1">Select a State</option>
                          <option value="2">Illinois</option>
                          <option value="4">California</option>
                        </select>
                        <input class="post_code" type="text" placeholder="Postcode/Zipcode" />
                        <a class="btn_1" href="/cart">Calculate Shipping</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="checkout_btn_inner float-right">
                <a class="btn_1 checkout_btn_1" href="/checkout">Proceed to checkout</a>
                <br />
                <br />
                <a class="btn_1" href="/shop">Continue Shopping</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--================End Cart Area =================-->
    </main>
    <!-- <h1>Users Carted Products</h1>
    <div v-for="carted_product in cartedProducts" :key="carted_product.id">
      <img :src="carted_product.product.image_url" alt="" />
      <h1>{{ carted_product.product.name }}</h1>
      <p>{{ carted_product.product.price }}</p>
      <router-link v-bind:to="`/products/${carted_product.product.id}`">More details</router-link>
    </div> -->
  </div>
</template>

<style>
.login-container {
  text-align: center;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      cartedProducts: [],
      counter: 1,
      subtotal: 1,
      isActive: false,
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
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    increase: function () {
      this.counter++;
    },
    decrease: function () {
      if (this.counter > 0) {
        this.counter--;
      }
    },
    toggle: function () {},
  },
};
</script>
