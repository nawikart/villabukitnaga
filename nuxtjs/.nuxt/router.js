import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _ae0fa712 = () => interopDefault(import('../pages/about-bali.vue' /* webpackChunkName: "pages/about-bali" */))
const _1158def8 = () => interopDefault(import('../pages/birthday.vue' /* webpackChunkName: "pages/birthday" */))
const _a7e54416 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1bd7bc7a = () => interopDefault(import('../pages/corporate.vue' /* webpackChunkName: "pages/corporate" */))
const _6505a3d0 = () => interopDefault(import('../pages/faqs.vue' /* webpackChunkName: "pages/faqs" */))
const _53f4e825 = () => interopDefault(import('../pages/gridFeature.vue' /* webpackChunkName: "pages/gridFeature" */))
const _2d757493 = () => interopDefault(import('../pages/meetings.vue' /* webpackChunkName: "pages/meetings" */))
const _1ba9bfd8 = () => interopDefault(import('../pages/press.vue' /* webpackChunkName: "pages/press" */))
const _61b3e121 = () => interopDefault(import('../pages/reservation.vue' /* webpackChunkName: "pages/reservation" */))
const _5fc24ef2 = () => interopDefault(import('../pages/reunions.vue' /* webpackChunkName: "pages/reunions" */))
const _759d860e = () => interopDefault(import('../pages/special.vue' /* webpackChunkName: "pages/special" */))
const _52de580d = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _53b5d163 = () => interopDefault(import('../pages/villa.vue' /* webpackChunkName: "pages/villa" */))
const _41d5891a = () => interopDefault(import('../pages/weddings.vue' /* webpackChunkName: "pages/weddings" */))
const _83f8fe52 = () => interopDefault(import('../pages/employee/erma.vue' /* webpackChunkName: "pages/employee/erma" */))
const _57450f24 = () => interopDefault(import('../pages/employee/hgs.vue' /* webpackChunkName: "pages/employee/hgs" */))
const _4d5aded0 = () => interopDefault(import('../pages/employee/imade.vue' /* webpackChunkName: "pages/employee/imade" */))
const _3bff2142 = () => interopDefault(import('../pages/employee/luhputu.vue' /* webpackChunkName: "pages/employee/luhputu" */))
const _2e46b6e6 = () => interopDefault(import('../pages/employee/mnt.vue' /* webpackChunkName: "pages/employee/mnt" */))
const _b1facb30 = () => interopDefault(import('../pages/employee/parta.vue' /* webpackChunkName: "pages/employee/parta" */))
const _1fe78df6 = () => interopDefault(import('../pages/reviews/emerald.vue' /* webpackChunkName: "pages/reviews/emerald" */))
const _24d1b9ea = () => interopDefault(import('../pages/reviews/j.vue' /* webpackChunkName: "pages/reviews/j" */))
const _a10dcc30 = () => interopDefault(import('../pages/reviews/johani.vue' /* webpackChunkName: "pages/reviews/johani" */))
const _4fb1f920 = () => interopDefault(import('../pages/reviews/laura.vue' /* webpackChunkName: "pages/reviews/laura" */))
const _688c7ff9 = () => interopDefault(import('../pages/feature/_id/index.vue' /* webpackChunkName: "pages/feature/_id/index" */))
const _21c264e7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about-bali",
      component: _ae0fa712,
      name: "about-bali"
    }, {
      path: "/birthday",
      component: _1158def8,
      name: "birthday"
    }, {
      path: "/contact",
      component: _a7e54416,
      name: "contact"
    }, {
      path: "/corporate",
      component: _1bd7bc7a,
      name: "corporate"
    }, {
      path: "/faqs",
      component: _6505a3d0,
      name: "faqs"
    }, {
      path: "/gridFeature",
      component: _53f4e825,
      name: "gridFeature"
    }, {
      path: "/meetings",
      component: _2d757493,
      name: "meetings"
    }, {
      path: "/press",
      component: _1ba9bfd8,
      name: "press"
    }, {
      path: "/reservation",
      component: _61b3e121,
      name: "reservation"
    }, {
      path: "/reunions",
      component: _5fc24ef2,
      name: "reunions"
    }, {
      path: "/special",
      component: _759d860e,
      name: "special"
    }, {
      path: "/test",
      component: _52de580d,
      name: "test"
    }, {
      path: "/villa",
      component: _53b5d163,
      name: "villa"
    }, {
      path: "/weddings",
      component: _41d5891a,
      name: "weddings"
    }, {
      path: "/employee/erma",
      component: _83f8fe52,
      name: "employee-erma"
    }, {
      path: "/employee/hgs",
      component: _57450f24,
      name: "employee-hgs"
    }, {
      path: "/employee/imade",
      component: _4d5aded0,
      name: "employee-imade"
    }, {
      path: "/employee/luhputu",
      component: _3bff2142,
      name: "employee-luhputu"
    }, {
      path: "/employee/mnt",
      component: _2e46b6e6,
      name: "employee-mnt"
    }, {
      path: "/employee/parta",
      component: _b1facb30,
      name: "employee-parta"
    }, {
      path: "/reviews/emerald",
      component: _1fe78df6,
      name: "reviews-emerald"
    }, {
      path: "/reviews/j",
      component: _24d1b9ea,
      name: "reviews-j"
    }, {
      path: "/reviews/johani",
      component: _a10dcc30,
      name: "reviews-johani"
    }, {
      path: "/reviews/laura",
      component: _4fb1f920,
      name: "reviews-laura"
    }, {
      path: "/feature/:id?",
      component: _688c7ff9,
      name: "feature-id"
    }, {
      path: "/",
      component: _21c264e7,
      name: "index"
    }],

    fallback: false
  })
}
