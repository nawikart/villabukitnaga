import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _534388f6 = () => interopDefault(import('../pages/about-bali.vue' /* webpackChunkName: "pages/about-bali" */))
const _5b735986 = () => interopDefault(import('../pages/birthday.vue' /* webpackChunkName: "pages/birthday" */))
const _329259a7 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _150c93ac = () => interopDefault(import('../pages/corporate.vue' /* webpackChunkName: "pages/corporate" */))
const _48271fa6 = () => interopDefault(import('../pages/faqs.vue' /* webpackChunkName: "pages/faqs" */))
const _595e8a52 = () => interopDefault(import('../pages/gridFeature.vue' /* webpackChunkName: "pages/gridFeature" */))
const _778fef21 = () => interopDefault(import('../pages/meetings.vue' /* webpackChunkName: "pages/meetings" */))
const _1383ffec = () => interopDefault(import('../pages/press.vue' /* webpackChunkName: "pages/press" */))
const _3de0985a = () => interopDefault(import('../pages/reservation.vue' /* webpackChunkName: "pages/reservation" */))
const _ac466d00 = () => interopDefault(import('../pages/reunions.vue' /* webpackChunkName: "pages/reunions" */))
const _07bafc80 = () => interopDefault(import('../pages/special.vue' /* webpackChunkName: "pages/special" */))
const _64ef6cca = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _2e4a1195 = () => interopDefault(import('../pages/villa.vue' /* webpackChunkName: "pages/villa" */))
const _e81ff8b0 = () => interopDefault(import('../pages/weddings.vue' /* webpackChunkName: "pages/weddings" */))
const _549521ee = () => interopDefault(import('../pages/employee/erma.vue' /* webpackChunkName: "pages/employee/erma" */))
const _407bfbfc = () => interopDefault(import('../pages/employee/hgs.vue' /* webpackChunkName: "pages/employee/hgs" */))
const _90432eb4 = () => interopDefault(import('../pages/employee/imade.vue' /* webpackChunkName: "pages/employee/imade" */))
const _4cf67bed = () => interopDefault(import('../pages/employee/luhputu.vue' /* webpackChunkName: "pages/employee/luhputu" */))
const _54fb281b = () => interopDefault(import('../pages/employee/mnt.vue' /* webpackChunkName: "pages/employee/mnt" */))
const _f4e31b14 = () => interopDefault(import('../pages/employee/parta.vue' /* webpackChunkName: "pages/employee/parta" */))
const _3a093a92 = () => interopDefault(import('../pages/reviews/emerald.vue' /* webpackChunkName: "pages/reviews/emerald" */))
const _32680b86 = () => interopDefault(import('../pages/reviews/j.vue' /* webpackChunkName: "pages/reviews/j" */))
const _e3f61c14 = () => interopDefault(import('../pages/reviews/johani.vue' /* webpackChunkName: "pages/reviews/johani" */))
const _204e1cbc = () => interopDefault(import('../pages/reviews/laura.vue' /* webpackChunkName: "pages/reviews/laura" */))
const _5c58052b = () => interopDefault(import('../pages/feature/_id/index.vue' /* webpackChunkName: "pages/feature/_id/index" */))
const _0752b5ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _534388f6,
      name: "about-bali"
    }, {
      path: "/birthday",
      component: _5b735986,
      name: "birthday"
    }, {
      path: "/contact",
      component: _329259a7,
      name: "contact"
    }, {
      path: "/corporate",
      component: _150c93ac,
      name: "corporate"
    }, {
      path: "/faqs",
      component: _48271fa6,
      name: "faqs"
    }, {
      path: "/gridFeature",
      component: _595e8a52,
      name: "gridFeature"
    }, {
      path: "/meetings",
      component: _778fef21,
      name: "meetings"
    }, {
      path: "/press",
      component: _1383ffec,
      name: "press"
    }, {
      path: "/reservation",
      component: _3de0985a,
      name: "reservation"
    }, {
      path: "/reunions",
      component: _ac466d00,
      name: "reunions"
    }, {
      path: "/special",
      component: _07bafc80,
      name: "special"
    }, {
      path: "/test",
      component: _64ef6cca,
      name: "test"
    }, {
      path: "/villa",
      component: _2e4a1195,
      name: "villa"
    }, {
      path: "/weddings",
      component: _e81ff8b0,
      name: "weddings"
    }, {
      path: "/employee/erma",
      component: _549521ee,
      name: "employee-erma"
    }, {
      path: "/employee/hgs",
      component: _407bfbfc,
      name: "employee-hgs"
    }, {
      path: "/employee/imade",
      component: _90432eb4,
      name: "employee-imade"
    }, {
      path: "/employee/luhputu",
      component: _4cf67bed,
      name: "employee-luhputu"
    }, {
      path: "/employee/mnt",
      component: _54fb281b,
      name: "employee-mnt"
    }, {
      path: "/employee/parta",
      component: _f4e31b14,
      name: "employee-parta"
    }, {
      path: "/reviews/emerald",
      component: _3a093a92,
      name: "reviews-emerald"
    }, {
      path: "/reviews/j",
      component: _32680b86,
      name: "reviews-j"
    }, {
      path: "/reviews/johani",
      component: _e3f61c14,
      name: "reviews-johani"
    }, {
      path: "/reviews/laura",
      component: _204e1cbc,
      name: "reviews-laura"
    }, {
      path: "/feature/:id?",
      component: _5c58052b,
      name: "feature-id"
    }, {
      path: "/",
      component: _0752b5ce,
      name: "index"
    }],

    fallback: false
  })
}
