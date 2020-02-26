import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export const STATUS_TYPE = {
  TODO: "TODO",
  DOING: "DOING",
  DONE: "DONE"
}

new Vue({
  render: h => h(App),
}).$mount('#app')
