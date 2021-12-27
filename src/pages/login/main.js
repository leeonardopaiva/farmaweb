import Vue from 'vue'
import App from './App.vue'

// Importing the global css file
import "@/assets/css/rwdgrid.css"
import "@/assets/css/style.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
