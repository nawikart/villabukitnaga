import Vue from 'vue'
import Router from 'vue-router'
import Sa from './views/Sa.vue'
import Home from './views/Home.vue'
import FormFeature from './components/form/Feature.vue'
import FormPress from './components/form/Press.vue'
// import FormTestimony from './components/form/Testimony.vue'
// import FormVilla from './components/form/Villa.vue'
import FormAboutBali from './components/form/AboutBali.vue'
import FormGallery from './components/form/Gallery.vue'
import List from './components/List.vue'

Vue.config.productionTip = false


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admiin',
      name: 'login',
      component: Sa
    },
    {
      path: '/admiin/home',
      name: 'home',
      component: Home
    },

    ////////////////
    {
      path: '/admiin/feature',
      name: 'formFeature',
      component: FormFeature
    }
    ,{
      path: '/admiin/about-bali',
      name: 'formEditAboutBali',
      component: FormAboutBali
    }
    ,{
      path: '/admiin/press',
      name: 'formPress',
      component: FormPress
    }
    ,{
      path: '/admiin/gallery',
      name: 'formEditGallery',
      component: FormGallery
    }
    
    
    //////////
    ,{
      path: '/admiin/features',
      name: 'features',
      component: List
    },
    {
      path: '/admiin/presss',
      name: 'presss',
      component: List
    },
  ]
})
