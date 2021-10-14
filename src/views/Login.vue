<template>
  <div class="login">
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
                  <h2>Login</h2>
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
                  <h2>New to Athlete Street?</h2>
                  <p>Athlete Street is a one stop shop for the best in today's athletic wear.</p>
                  <a href="/signup" class="btn_3">Create an Account</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="login_part_form">
                <div class="login_part_form_iner">
                  <h3>
                    Welcome Back !
                    <br />
                    Please Sign in now
                  </h3>
                  <form class="row contact_form" v-on:submit.prevent="submit()" novalidate="novalidate">
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="email"
                        class="form-control"
                        id="name"
                        name="name"
                        v-model="newSessionParams.email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-md-12 form-group p_star">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="newSessionParams.password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <div class="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label for="f-option">Remember me</label>
                      </div>
                      <button type="submit" value="submit" class="btn_3">log in</button>
                      <a class="lost_pass" href="/login">forget password?</a>
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
    <!-- <form v-on:submit.prevent="submit()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/shop");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
