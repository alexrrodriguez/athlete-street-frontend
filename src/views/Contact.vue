<template>
  <div class="contact">
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
    <!--? Hero Area Start-->
    <div class="slider-area">
      <div class="single-slider slider-height2 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="hero-cap text-center">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <br />
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94987.49704779334!2d-87.77934712874706!3d41.928130466145426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc364ca91a83%3A0x8b853df14360246d!2s4255%20N%20Knox%20Ave%2C%20Chicago%2C%20IL%2060641!5e0!3m2!1sen!2sus!4v1632575357946!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border: 0; margin: 0 auto; display: block"
        allowfullscreen
        loading="lazy"
        frameborder="0"
      ></iframe>
      <!-- <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> -->
    </div>
    <section class="contact-section">
      <div class="container">
        <!--? Hero Area End-->
        <div class="row">
          <div class="col-12">
            <h2 class="contact-title">Get in Touch</h2>
          </div>
          <div class="col-lg-8">
            <form
              class="form-contact contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              novalidate="novalidate"
            >
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      class="form-control w-100"
                      name="message"
                      id="message"
                      cols="30"
                      rows="9"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Message'"
                      placeholder=" Enter Message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="name"
                      id="name"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter email address'"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Subject'"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mt-3">
                <button type="submit" class="button button-contactForm boxed-btn">Send</button>
              </div>
            </form>
          </div>
          <div class="col-lg-3 offset-lg-1">
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-home"></i></span>
              <div class="media-body">
                <h3>Chicago, Illinois.</h3>
                <p>Chicago, IL 60645</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-tablet"></i></span>
              <div class="media-body">
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div class="media contact-info">
              <span class="contact-info__icon"><i class="ti-email"></i></span>
              <div class="media-body">
                <h3>support@athletestreet.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
