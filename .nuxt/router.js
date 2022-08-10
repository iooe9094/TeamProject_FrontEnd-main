import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b9d875a = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _0e6d67bb = () => interopDefault(import('../pages/file-http-common.js' /* webpackChunkName: "pages/file-http-common" */))
const _eaa72db8 = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _e26e7938 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _18ebe023 = () => interopDefault(import('../pages/MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _572fe75a = () => interopDefault(import('../pages/mypage/index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _e87d0602 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _671d1e4c = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _55122b30 = () => interopDefault(import('../pages/SignUp/index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _78082616 = () => interopDefault(import('../pages/UploadImage.vue' /* webpackChunkName: "pages/UploadImage" */))
const _e12a3d48 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _55b4aa91 = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _72a50f28 = () => interopDefault(import('../pages/find/id.vue' /* webpackChunkName: "pages/find/id" */))
const _6e3dd1a8 = () => interopDefault(import('../pages/find/password.vue' /* webpackChunkName: "pages/find/password" */))
const _319cabdf = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _0c879f24 = () => interopDefault(import('../pages/inform/Write.vue' /* webpackChunkName: "pages/inform/Write" */))
const _28b1847c = () => interopDefault(import('../pages/items/List.vue' /* webpackChunkName: "pages/items/List" */))
const _56d73487 = () => interopDefault(import('../pages/service/IndexDataService.js' /* webpackChunkName: "pages/service/IndexDataService" */))
const _c5286c72 = () => interopDefault(import('../pages/service/ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _65d879d4 = () => interopDefault(import('../pages/service/ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _7e27fc5b = () => interopDefault(import('../pages/service/ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _4da5f06b = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _628ac721 = () => interopDefault(import('../pages/service/UploadFilesService.js' /* webpackChunkName: "pages/service/UploadFilesService" */))
const _67575d4e = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _e13ba76c = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _a43c262a = () => interopDefault(import('../pages/SignUp/Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _da846074 = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _7e1face4 = () => interopDefault(import('../pages/board/detail/update/_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _13af5627 = () => interopDefault(import('../pages/inform/detail/update/_idx.vue' /* webpackChunkName: "pages/inform/detail/update/_idx" */))
const _58829c64 = () => interopDefault(import('../pages/board/detail/_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _5e0f9deb = () => interopDefault(import('../pages/inform/detail/_idx.vue' /* webpackChunkName: "pages/inform/detail/_idx" */))
const _64f0ee71 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _26980a2b = () => interopDefault(import('../pages/tourItemDetails/_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
const _f76bd766 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CheckPayment",
    component: _7b9d875a,
    name: "CheckPayment"
  }, {
    path: "/file-http-common",
    component: _0e6d67bb,
    name: "file-http-common"
  }, {
    path: "/http-common",
    component: _eaa72db8,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _e26e7938,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _18ebe023,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _572fe75a,
    name: "mypage"
  }, {
    path: "/Qna",
    component: _e87d0602,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _671d1e4c,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _55122b30,
    name: "SignUp"
  }, {
    path: "/UploadImage",
    component: _78082616,
    name: "UploadImage"
  }, {
    path: "/board/List",
    component: _e12a3d48,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _55b4aa91,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _72a50f28,
    name: "find-id"
  }, {
    path: "/find/password",
    component: _6e3dd1a8,
    name: "find-password"
  }, {
    path: "/inform/List",
    component: _319cabdf,
    name: "inform-List"
  }, {
    path: "/inform/Write",
    component: _0c879f24,
    name: "inform-Write"
  }, {
    path: "/items/List",
    component: _28b1847c,
    name: "items-List"
  }, {
    path: "/service/IndexDataService",
    component: _56d73487,
    name: "service-IndexDataService"
  }, {
    path: "/service/ItemDetailDataService",
    component: _c5286c72,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ItemListDataService",
    component: _65d879d4,
    name: "service-ItemListDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _7e27fc5b,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _4da5f06b,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UploadFilesService",
    component: _628ac721,
    name: "service-UploadFilesService"
  }, {
    path: "/service/UserDataService",
    component: _67575d4e,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _e13ba76c,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _a43c262a,
    name: "SignUp-Complete"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _da846074,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _7e1face4,
    name: "board-detail-update-idx"
  }, {
    path: "/inform/detail/update/:idx?",
    component: _13af5627,
    name: "inform-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _58829c64,
    name: "board-detail-idx"
  }, {
    path: "/inform/detail/:idx?",
    component: _5e0f9deb,
    name: "inform-detail-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _64f0ee71,
    name: "payment-userIdx"
  }, {
    path: "/tourItemDetails/:idx?",
    component: _26980a2b,
    name: "tourItemDetails-idx"
  }, {
    path: "/",
    component: _f76bd766,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
