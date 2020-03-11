<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-left">{{boardTitle}}</h5>
      <p class="card-text text-left">{{boardContent}}</p>
      <button class="btn btn-sm float-right"
              v-bind:class="btnStyle"
              v-on:click="changeNextStep">
        {{boardStatus}}
      </button>
    </div>
  </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import {EVENT_TYPE} from "../main";
    import {STATUS_TYPE} from "../main";

    export default {
        name: "BoardItem",
        props: ["id", "boardTitle", "boardContent", "boardStatus"],
        methods: {
            changeNextStep() {
                this.$emit(EVENT_TYPE.CHANGE_STATUS);
            }
        },
        computed: {
            btnStyle() {
                if (this.boardStatus === STATUS_TYPE.TODO) {
                    return "btn-secondary"
                } else if (this.boardStatus === STATUS_TYPE.DOING) {
                    return "btn-primary"
                } else {
                    return "btn-success disabled"
                }
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
