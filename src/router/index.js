import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Checkout from "../views/Checkout.vue";
import Confirmation from "../views/Confirmation.vue";
import ProductsShow from "../views/ProductsShow.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Cart from "../views/Cart.vue";
import Orders from "../views/Orders.vue";
import Contact from "../views/Contact.vue";
import ShopMens from "../views/ShopMens.vue";
import ShopWomens from "../views/ShopWomens.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/mens",
    name: "mens",
    component: ShopMens,
  },
  {
    path: "/womens",
    name: "womens",
    component: ShopWomens,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    component: Confirmation,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/products/:id",
    name: "product-show",
    component: ProductsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
