<template>
  <div class="signup">
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
                  <h2>Signup</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero Area End-->
      <!--================login_part Area =================-->
      <section class="login_part section_padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="login_part_text text-center">
                <div class="login_part_text_iner">
                  <h2>Welcome to our Store!</h2>
                  <p>Athlete Street is a one stop shop for the best in today's athletic wear.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="login_part_form">
                <div class="login_part_form_iner">
                  <h3>
                    Welcome !
                    <br />

                    Register Below or
                    <a class="signup-login-link" href="/login">Login</a>
                    if already Registered
                  </h3>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <form class="row contact_form" novalidate="novalidate" v-on:submit.prevent="submit()">
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        v-model="newUserParams.name"
                        placeholder="Username"
                      />
                    </div>
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="email"
                        class="form-control"
                        id="name"
                        name="name"
                        v-model="newUserParams.email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="newUserParams.password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="newUserParams.password_confirmation"
                        placeholder="Password Confirmation"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <div class="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label for="f-option">Remember me</label>
                      </div>
                      <button type="submit" value="submit" class="btn_3">Signup</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--================login_part end =================-->
    </main>
  </div>
</template>

<style>
.signup-login-link {
  color: blue;
}
.signup-login-link:hover {
  color: red;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
