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

export const EVENT_TYPE = {
  ADD_TODO: "addTodo",
  CHANGE_STATUS: "changeStatus"
};

export const EventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
