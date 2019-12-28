import Vue from 'vue'
import VueRouter from 'vue-router'
import page from '@/views/page'
// import Home from '../views/Home.vue'
import index from '@/views/page/index'
import living from '@/views/page/living'
import quality from '@/views/page/quality'
import productGroup from '@/views/page/productGroup'

import cart from '@/views/cart'
import center from '@/views/center'
import orders from '@/views/orders'
import receiving from '@/views/receiving'
import unpaid from '@/views/unpaid'

import classify from '@/views/classify'
import inner from '@/views/inner'
import date_new from '@/views/inner/Date_new'
import sale from '@/views/inner/Sale'
import price from '@/views/inner/Price'

// import message from '@/views/message'
// import message from '@/views/message'

import login from '@/views/login'
import password from '@/views/login/password'
import note from '@/views/login/note'

import register from '@/views/register'
import detail from '@/views/detail'

import address_message from '@/views/address_message'
import detailed_address from '@/views/detailed_address'

import address from '@/views/address'
import about from '@/views/about'
import information from '@/views/information'

Vue.use(VueRouter)

const routes = [
  {
    path: '/page',
    component: page,
    // component: Home
    children: [
      {
        // path: '/film/nowPlaying',
        path: 'index',
        component: index
      },
      {
        path: 'living',
        component: living
      },
      {
        path: 'quality',
        component: quality
      },
      {
        path: 'productGroup',
        component: productGroup
      },
      {
        path: '/page',
        redirect: 'index'
      }
    ]
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/center',
    component: center,
  },
  {
    path: '/classify',
    component: classify,
  },
  {
    path: '/inner',
    component: inner,
    children: [
      {
        path: 'date_new',
        name: "date_new",
        component: date_new
      },
      {
        path: 'sale',
        component: sale
      },
      {
        path: 'price',
        component: price
      },
      {
        path: '/inner',
        
        redirect: 'date_new'
      }

    ]
  },
  // {
  //   path: '/message',
  //   component: message
  // },
  {
    path: '/detail',
    component: detail
  },
  {
    path: '/orders',
    component: orders
  },
  {
    path: '/receiving',
    component: receiving
  },
  {
    path: '/unpaid',
    component: unpaid
  },
  {
    path: '/login',
    component: login,
    children: [
      {
        path: 'password',
        component: password
      },
      {
        path: 'note',
        component: note
      },
      {
        path: '/login',
        redirect: 'password'
      }
    ]
  },
  {
    path: '/address_message',
    component: address_message,
  },
  {
    path: '/detailed_address',
    component: detailed_address
  },
  {
    path: '/address',
    component: address
  },
  {
    path: '/information',
    component: information
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/*',
    redirect: '/page'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
