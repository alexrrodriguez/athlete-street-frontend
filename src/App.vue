<template>
  <div id="app">
    <header>
      <!-- Header Start -->
      <div class="header-area">
        <div class="main-header header-sticky">
          <div class="container-fluid">
            <div class="menu-wrapper">
              <!-- Logo -->
              <div class="logo">
                <a href="/"><img src="assets/img/logo/logo.png" alt="" /></a>
              </div>
              <!-- Main-menu -->
              <div class="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><a href="/">Home</a></li>
                    <li>
                      <a>Shop</a>
                      <ul class="submenu">
                        <li><a href="shop.html">Mens</a></li>
                        <li><a href="product_details.html">Womens</a></li>
                      </ul>
                    </li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/orders">Orders</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <!-- <li>
                      <a href="blog.html">Blog</a>
                      <ul class="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="submenu">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="elements.html">Element</a></li>
                        <li><a href="confirmation.html">Confirmation</a></li>
                        <li><a href="checkout.html">Product Checkout</a></li>
                      </ul>
                    </li> -->
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <!-- Header Right -->
              <div class="header-right">
                <ul>
                  <li>
                    <div class="nav-search search-switch">
                      <span class="flaticon-search"></span>
                    </div>
                  </li>
                  <li>
                    <a href="/login"><span class="flaticon-user"></span></a>
                  </li>
                  <li>
                    <a href="/cart"><span class="flaticon-shopping-cart"></span></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header End -->
    </header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/shop">Shop</router-link>
      |
      <router-link to="/cart">Cart</router-link>
      |
      <router-link to="/orders">Orders</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/logout">Logout</router-link>
    </div> -->
    <router-view />
    <!--? Shop Method Start-->
    <div class="shop-method-area">
      <div class="container">
        <div class="method-wrapper">
          <div class="row d-flex justify-content-between">
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="single-method mb-40">
                <i class="ti-package"></i>
                <h6>Free Shipping Method</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="single-method mb-40">
                <i class="ti-unlock"></i>
                <h6>Secure Payment System</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="single-method mb-40">
                <i class="ti-reload"></i>
                <h6>Secure Payment System</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Shop Method End-->
    <footer>
      <!-- Footer Start-->
      <div class="footer-area footer-padding">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-xl-3 col-lg-3 col-md-5 col-sm-6">
              <div class="single-footer-caption mb-50">
                <div class="single-footer-caption mb-30">
                  <!-- logo -->
                  <div class="footer-logo">
                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                  </div>
                  <div class="footer-tittle">
                    <div class="footer-pera">
                      <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5">
              <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Offers & Discounts</a></li>
                    <li><a href="#">Get Coupon</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-7">
              <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                  <h4>New Products</h4>
                  <ul>
                    <li><a href="#">Woman Cloth</a></li>
                    <li><a href="#">Fashion Accessories</a></li>
                    <li><a href="#">Man Accessories</a></li>
                    <li><a href="#">Rubber made Toys</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-5 col-sm-7">
              <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                  <h4>Support</h4>
                  <ul>
                    <li><a href="#">Frequently Asked Questions</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Report a Payment Issue</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Footer bottom -->
          <div class="row align-items-center">
            <div class="col-xl-7 col-lg-8 col-md-7">
              <div class="footer-copy-right">
                <p>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  Copyright &copy;
                  <!-- <script>
                    document.write(new Date().getFullYear());
                  </script> -->
                  All rights reserved | This template is made with
                  <i class="fa fa-heart" aria-hidden="true"></i>
                  by
                  <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-4 col-md-5">
              <div class="footer-copy-right f-right">
                <!-- social -->
                <div class="footer-social">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="https://www.facebook.com/sai4ull"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-behance"></i></a>
                  <a href="#"><i class="fas fa-globe"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer End-->
    </footer>
    <!--? Search model Begin -->
    <div class="search-model-box">
      <div class="h-100 d-flex align-items-center justify-content-center">
        <div class="search-close-btn">+</div>
        <form class="search-model-form">
          <input type="text" id="search-input" placeholder="Searching key....." />
        </form>
      </div>
    </div>
    <!-- Search model end -->
  </div>
</template>

<style></style>
