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
import {STATUS_TYPE} from "@/main";
import {Item} from '@/store'
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class BoardItem extends Vue {

  @Prop()
  item?: Item

  changeStatus() {
    let nextStatus = 'DOING';
    if (this.item?.status === 'DOING') {
      nextStatus = 'DONE';
    }
    this.$store.commit('changeStatus', {id: this.item?.id, status: nextStatus});
  }

  get btnStyle() {
    if (this.item?.status === STATUS_TYPE.TODO) {
      return "btn-secondary"
    }
    if (this.item?.status === STATUS_TYPE.DOING) {
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
