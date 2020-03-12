<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-left">{{item.title}}</h5>
      <p class="card-text text-left">{{item.content}}</p>
      <button class="btn btn-sm float-right"
              v-bind:class="btnStyle"
              v-on:click="changeNextStep">
        {{item.status}}
      </button>
    </div>
  </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import {EVENT_TYPE, EventBus} from "../main";
    import {STATUS_TYPE} from "../main";

    export default {
        name: "BoardItem",
        props: ["item"],
        methods: {
            changeNextStep() {
                EventBus.$emit(EVENT_TYPE.CHANGE_STATUS, this.item);
            }
        },
        computed: {
            btnStyle() {
                if (this.item.status === STATUS_TYPE.TODO) {
                    return "btn-secondary"
                }
                if (this.item.status === STATUS_TYPE.DOING) {
                    return "btn-primary"
                }
                return "btn-success disabled"
            }
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
