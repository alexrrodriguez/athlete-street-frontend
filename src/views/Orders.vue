<template>
  <div class="orders-index">
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
                  <h2>Orders</h2>
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
      <!--================ confirmation part start =================-->
      <section v-if="isLoggedIn()" class="confirmation_part section_padding">
        <div class="container" v-for="order in orders" :key="order.id">
          <div class="row">
            <div class="col-lg-12">
              <div class="confirmation_tittle">
                <span>Review past orders below.</span>
              </div>
            </div>
            <div class="col-lg-6 col-lx-4">
              <div class="single_confirmation_details">
                <h4>order info</h4>
                <ul>
                  <li>
                    <p>order number</p>
                    <span>: {{ order.id }}</span>
                  </li>
                  <li>
                    <p>subtotal</p>
                    <span>: ${{ order.money_math[0] }}</span>
                  </li>
                  <li>
                    <p>tax</p>
                    <span>: ${{ order.money_math[1] }}</span>
                  </li>
                  <li>
                    <p>total</p>
                    <span>: ${{ order.money_math[2] }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-lx-4">
              <div class="single_confirmation_details">
                <h4>Billing Address</h4>
                <ul>
                  <li>
                    <p>Street</p>
                    <span>: 56/8</span>
                  </li>
                  <li>
                    <p>city</p>
                    <span>: Los Angeles</span>
                  </li>
                  <li>
                    <p>country</p>
                    <span>: United States</span>
                  </li>
                  <li>
                    <p>postcode</p>
                    <span>: 36952</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-lx-4">
              <div class="single_confirmation_details">
                <h4>shipping Address</h4>
                <ul>
                  <li>
                    <p>Street</p>
                    <span>: 56/8</span>
                  </li>
                  <li>
                    <p>city</p>
                    <span>: Los Angeles</span>
                  </li>
                  <li>
                    <p>country</p>
                    <span>: United States</span>
                  </li>
                  <li>
                    <p>postcode</p>
                    <span>: 36952</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="order_details_iner">
                <h3>Order Details</h3>
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" colspan="2">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody v-for="product in order.products" :key="product.id">
                    <tr>
                      <th colspan="2">
                        <router-link v-bind:to="`/products/${product.id}`">
                          <span class="signup-login-link">{{ product.name }}</span>
                        </router-link>
                      </th>
                      <div v-for="quantity in order.carted_products" :key="quantity.id">
                        <th v-if="quantity.product_id == product.id">x{{ quantity.quantity }}</th>
                      </div>

                      <th>
                        <span>${{ product.price }}</span>
                      </th>
                    </tr>
                  </tbody>
                  <tr>
                    <th colspan="3">Subtotal</th>
                    <th>
                      <span>${{ order.money_math[0] }}</span>
                    </th>
                  </tr>
                  <tr>
                    <th colspan="3">shipping</th>
                    <th><span>flat rate: $50.00</span></th>
                  </tr>
                  <tfoot>
                    <tr>
                      <th scope="col" colspan="3">Total</th>
                      <th scope="col">${{ order.money_math[2] }}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <br />
              <a class="btn_1" href="/shop">Continue Shopping</a>
            </div>
          </div>
        </div>
      </section>
      <!--================ confirmation part end =================-->
    </main>
    <!-- <h1>Users Ordered Products</h1>
    <div v-for="order in orders" :key="order.id">
      <h2>Order ID:</h2>
      <p>{{ order.id }}</p>
      <p>Subtotal:</p>
      <p>{{ order.money_math[0] }}</p>
      <p>Tax:</p>
      <p>{{ order.money_math[1] }}</p>
      <p>Total:</p>
      <p>{{ order.money_math[2] }}</p>
      <div v-for="product in order.products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <img :src="product.image_url" :alt="product.name" />
        <p>{{ product.price }}</p>
        <div v-for="quantity in order.carted_products" :key="quantity.id">
          <p v-if="quantity.product_id == product.id">Quantity: {{ quantity.quantity }}</p>
        </div>
        <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
      </div>
    </div> -->
  </div>
</template>

<style>
.order-product-link:hover {
  color: lightskyblue;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      orders: [],
    };
  },
  created: function () {
    this.indexOrders();
  },
  methods: {
    indexOrders: function () {
      axios.get("/orders").then((response) => {
        console.log("orders index", response);
        this.orders = response.data;
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
