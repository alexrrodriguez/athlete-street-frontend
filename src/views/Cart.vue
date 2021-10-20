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
                    <th class="remove-button" scope="col">Quantity</th>
                    <th scope="col"></th>
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
                          <a :href="`/products/${carted_product.product.id}`">
                            <p>
                              {{ carted_product.product.name }}
                            </p>
                          </a>
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
                    <td class="remove-button">
                      <button v-on:click="destroyCartedProduct(carted_product)" class="genric-btn danger radius">
                        Remove
                      </button>
                    </td>
                    <td>
                      <h5>${{ (carted_product.product.price * carted_product.quantity).toFixed(2) }}</h5>
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
                      <h5>${{ (total * 1).toFixed(2) }}</h5>
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
                            <input type="checkbox" id="primary-radio" />
                          </li>
                          <li>
                            Free Shipping
                            <input type="checkbox" id="primary-radio" checked />
                          </li>
                          <li>
                            Flat Rate: $10.00
                            <input type="checkbox" id="primary-radio" />
                          </li>
                          <li>
                            Local Delivery: $2.00
                            <input type="checkbox" id="primary-radio" />
                          </li>
                        </ul>
                        <br />
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
                        <hr />
                        <br />
                        <a class="btn_1 checkout_btn_1" href="/checkout">Proceed to checkout</a>
                        <br />
                        <br />
                        <a class="btn_1" href="/shop">Continue Shopping</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <!--================End Cart Area =================-->
    </main>
  </div>
</template>

<style>
.remove-button {
  text-align: center;
}
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
      country: "",
      total: 0,
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
        this.cartedProducts.forEach((carted_total, i) => {
          console.log(carted_total);
          console.log(i);
          this.total += carted_total.product.price * carted_total.quantity;
        });
      });
    },
    destroyCartedProduct: function (carted_product) {
      axios.delete("/carted_products/" + carted_product.id).then((response) => {
        console.log("carted product destroy", response);
        window.location.reload();
      });
    },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
