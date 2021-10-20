<template>
  <div class="checkout">
    <main>
      <!-- Hero Area Start-->
      <div class="slider-area">
        <div class="single-slider slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap text-center">
                  <h2>Checkout</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--================Checkout Area =================-->
      <section class="checkout_area section_padding">
        <div class="container">
          <div v-if="!isLoggedIn()" class="returning_customer">
            <div class="check_title">
              <h2>
                Returning Customer?
                <a href="#">Click here to login</a>
              </h2>
            </div>
            <p>
              If you have shopped with us before, please enter your details in the boxes below. If you are a new
              customer, please proceed to the Billing & Shipping section.
            </p>
            <form class="row contact_form" action="#" method="post" novalidate="novalidate">
              <div class="col-md-6 form-group p_star">
                <input type="text" class="form-control" id="name" name="name" value=" " />
                <span class="placeholder" data-placeholder="Username or Email"></span>
              </div>
              <div class="col-md-6 form-group p_star">
                <input type="password" class="form-control" id="password" name="password" value="" />
                <span class="placeholder" data-placeholder="Password"></span>
              </div>
              <div class="col-md-12 form-group">
                <button type="submit" value="submit" class="btn_3">log in</button>
                <div class="creat_account">
                  <input type="checkbox" id="f-option" name="selector" />
                  <label for="f-option">Remember me</label>
                </div>
                <a class="lost_pass" href="#">Lost your password?</a>
              </div>
            </form>
          </div>
          <div class="cupon_area">
            <div class="check_title">
              <h2>
                Have a coupon?
                <a href="#">Click here to enter your code</a>
              </h2>
            </div>
            <input type="text" placeholder="Enter coupon code" />
            <a class="tp_btn" href="#">Apply Coupon</a>
          </div>
          <div class="billing_details">
            <div class="row">
              <div class="col-lg-8">
                <h3>Billing Details</h3>
                <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                  <div class="col-md-6 form-group p_star">
                    <input type="text" class="form-control" id="first" name="name" />
                    <span class="placeholder" data-placeholder="First name"></span>
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input type="text" class="form-control" id="last" name="name" />
                    <span class="placeholder" data-placeholder="Last name"></span>
                  </div>
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" id="company" name="company" placeholder="Company name" />
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input type="text" class="form-control" id="number" name="number" />
                    <span class="placeholder" data-placeholder="Phone number"></span>
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input type="text" class="form-control" id="email" name="compemailany" />
                    <span class="placeholder" data-placeholder="Email Address"></span>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <select class="country_select">
                      <option value="1">USA</option>
                      <option value="2">UK</option>
                      <option value="4">India</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input type="text" class="form-control" id="add1" name="add1" />
                    <span class="placeholder" data-placeholder="Address line 01"></span>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input type="text" class="form-control" id="add2" name="add2" />
                    <span class="placeholder" data-placeholder="Address line 02"></span>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <input type="text" class="form-control" id="city" name="city" />
                    <span class="placeholder" data-placeholder="Town/City"></span>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <select class="country_select">
                      <option value="1">District 1</option>
                      <option value="2">District 2</option>
                      <option value="4">District 3</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" id="zip" name="zip" placeholder="Postcode/ZIP" />
                  </div>
                  <div class="col-md-12 form-group">
                    <div class="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label for="f-option2">Create an account?</label>
                    </div>
                  </div>
                  <div class="col-md-12 form-group">
                    <div class="creat_account">
                      <h3>Shipping Details</h3>
                      <input type="checkbox" id="f-option3" name="selector" />
                      <label for="f-option3">Ship to a different address?</label>
                    </div>
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Order Notes"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <div class="order_box">
                  <h2>Your Order</h2>
                  <ul class="list">
                    <li>
                      <a>
                        Product
                        <span>Total</span>
                      </a>
                    </li>
                    <li v-for="carted_product in cartedProducts" :key="carted_product.id">
                      <a href="#">
                        {{ carted_product.product.name }} X{{ carted_product.quantity }}
                        <span class="last">
                          ${{ (carted_product.product.price * carted_product.quantity).toFixed(2) }}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul class="list list_2">
                    <li>
                      <a href="#">
                        Subtotal
                        <span>${{ (subtotal * 1).toFixed(2) }}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Shipping
                        <span>Free Shipping: $0.00</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tax
                        <span>${{ (tax * 1).toFixed(2) }}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Total
                        <span>${{ (total * 1).toFixed(2) }}</span>
                      </a>
                    </li>
                  </ul>
                  <div class="payment_item">
                    <div class="radion_btn">
                      <input type="radio" id="f-option5" name="selector" />
                      <label for="f-option5">E-payment</label>
                      <div class="check"></div>
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div class="creat_account">
                    <input type="checkbox" id="f-option4" name="selector" />
                    <label for="f-option4">I’ve read and accept the</label>
                    <a href="/checkout">terms & conditions*</a>
                  </div>
                  <a class="btn_3 order-product-link confirm-btn" v-on:click="createOrder()">Confirm Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--================End Checkout Area =================-->
    </main>
  </div>
</template>

<style>
.confirm-btn {
  color: blue !important;
}
.confirm-btn:hover {
  color: white !important;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      cartedProducts: [],
      orders: [],
      subtotal: 0,
      tax: 0,
      total: 0,
      newOrderParams: {},
      userID: 0,
    };
  },
  created: function () {
    this.indexCart();
    this.indexOrders();
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    indexCart: function () {
      axios.get("/carted_products").then((response) => {
        console.log("carted products show", response);
        this.userID = localStorage.getItem("user_id");
        this.cartedProducts = response.data;
        this.cartedProducts.forEach((carted_total, i) => {
          console.log(carted_total);
          console.log(i);
          this.tax += carted_total.product.tax * carted_total.quantity;
          this.subtotal += carted_total.product.price * carted_total.quantity;
          this.total += carted_total.product.total * carted_total.quantity;
        });
      });
    },
    createOrder: function () {
      this.newOrderParams.user_id = this.userID;
      axios.post("/orders", this.newOrderParams).then((response) => {
        console.log("order create", response);
        this.$router.push("/confirmation");
      });
    },
  },
};
</script>
