import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "../pages/Home"
import Form from "../pages/Form"
import About from "../pages/About"

const routes = [{
    path: "/",
    component: Home
  },
  {
    path: "/form",
    component: Form
  },
  {
    path: "/About",
    component: About
  }
]

export default new VueRouter({
  routes
})
