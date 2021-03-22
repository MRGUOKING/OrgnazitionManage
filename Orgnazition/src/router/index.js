import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";
import Register from "../pages/Register";
import Structure from "../pages/Structure";
import PositionManage from "../pages/PositionManage";
import MyPeople from "../pages/MyPeople";
import Check from "../pages/Check";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      meta:{
        noHead:true
      }
    },
    {
      path: '',
      redirect:'/login'
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/structure',
      component: Structure
    },
    {
      path: '/position',
      component: PositionManage
    },
    {
      path: '/myPeople',
      component: MyPeople
    },
    {
      path: '/check',
      component: Check
    }

  ]
})
