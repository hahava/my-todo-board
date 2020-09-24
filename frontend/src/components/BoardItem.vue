<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-left">{{ item.title }}</h5>
      <p class="card-text text-left">{{ item.content }}</p>
      <button class="btn btn-sm float-right"
              v-bind:class="btnStyle"
              v-on:click="changeStatus">
        {{ item.status }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Item, Status} from '@/store'
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class BoardItem extends Vue {

  @Prop()
  item?: Item

  changeStatus() {
    let nextStatus = Status.doing;
    if (this.item?.status === Status.doing) {
      nextStatus = Status.done;
    }
    this.$store.commit('changeStatus', {id: this.item?.id, status: nextStatus});
  }

  get btnStyle() {
    if (this.item?.status === Status.todo) {
      return "btn-secondary"
    }
    if (this.item?.status === Status.done) {
      return "btn-primary"
    }
    return "btn-success disabled"
  }
}
</script>

<style scoped>
div {
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  position: inherit;
  right: 0px;
}
</style>
