<template>
  <div class="confirmation">
    <main>
      <!-- Hero Area Start-->
      <div class="slider-area">
        <div class="single-slider slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>Confirmation</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--================ confirmation part start =================-->
      <section class="confirmation_part section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="confirmation_tittle">
                <span>Thank you. Your order has been received.</span>
              </div>
            </div>
            <div class="col-lg-6 col-lx-4">
              <div class="single_confirmation_details">
                <h4>order info</h4>
                <ul>
                  <li>
                    <p>order number</p>
                    <span>: {{ lastOrder.id }}</span>
                  </li>
                  <li>
                    <p>data</p>
                    <span>: Oct 03, 2017</span>
                  </li>
                  <li>
                    <p>total</p>
                    <span>: USD {{ (total * 1).toFixed(2) }}</span>
                  </li>
                  <li>
                    <p>mayment methord</p>
                    <span>: E Payment</span>
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
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in lastOrder.products" :key="product.id">
                      <th colspan="2">
                        <span>{{ product.name }}</span>
                      </th>
                      <div v-for="quantity in lastOrder.carted_products" :key="quantity.id">
                        <th v-if="quantity.product_id == product.id">X{{ quantity.quantity }}</th>
                      </div>
                      <th>
                        <span>${{ (product.price * 1).toFixed(2) }}</span>
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">Subtotal</th>
                      <th>
                        <span>${{ (subtotal * 1).toFixed(2) }}</span>
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">Tax</th>
                      <th>
                        <span>${{ (tax * 1).toFixed(2) }}</span>
                      </th>
                    </tr>
                    <tr>
                      <th colspan="3">shipping</th>
                      <th><span>free shipping: $0.00</span></th>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="col" colspan="3">Total</th>
                      <th scope="col">${{ (total * 1).toFixed(2) }}</th>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      orders: [],
      lastOrder: [],
      subtotal: 0,
      tax: 0,
      total: 0,
    };
  },
  created: function () {
    this.indexOrders();
  },
  methods: {
    indexOrders: function () {
      axios.get("/orders").then((response) => {
        console.log("orders index", response);
        console.log("orders count", response.data.length);
        this.orders = response.data;
        this.lastOrder = response.data[response.data.length - 1];
        console.log("last order", this.lastOrder);
        this.subtotal = response.data[response.data.length - 1].money_math[0];
        console.log(this.subtotal);
        this.tax = response.data[response.data.length - 1].money_math[1];
        console.log(this.tax);
        this.total = response.data[response.data.length - 1].money_math[2];
        console.log(this.total);
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
