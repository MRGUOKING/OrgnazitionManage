import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";
import Register from "../pages/Register";
import Structure from "../pages/Structure";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/structure',
      component: Structure
    }
  ]
})
