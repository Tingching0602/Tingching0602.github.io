import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import HomePage from '../views/HomePage.vue'
import Shopping from '../views/ShoppingHome.vue'
import NotFound from '../views/NotFound.vue'
import HomePage2 from '../views/HomePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  }, 
  {
    path: '/HomeMain',
    name: 'homemain',
    component: HomePage2
  }, 
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
  }, 
  {
    path: '/productlist',
    name: 'product-list',
    component: () => import("../views/ProductList.vue")
  },
  {
    path: '/shoppinghome',
    name: 'shoppong-home',
    component: Shopping
  },
  {
    path: '/aboutus',
    name: 'about-us',
    component: () => import("../views/AboutUs.vue")
  },
  {
    path: '/talktous',
    name: 'talk-to-us',
    component: () => import("../views/TalktoUs.vue")
  },
  {
    path: '/*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
