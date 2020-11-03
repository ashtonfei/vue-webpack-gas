import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "../pages/Home"
import Form from "../pages/Form"
import Contacts from "../pages/Contacts"

const routes = [{
    path: "/",
    component: Home
},
{
    path: "/form",
    component: Form
},
{
    path: "/contacts",
    component: Contacts
}
]

export default new VueRouter({
    routes
})
