<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-left">{{currentTitle}}</h5>
      <p class="card-text text-left">{{currentContent}}</p>
      <button class="btn btn-sm float-right"
              v-bind:class="btnStyle"
              v-on:click="changeNextStep">
        {{currentStatus}}
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
        data: function () {
            return {
                currentId: this.id,
                currentStatus: this.boardStatus,
                currentTitle: this.boardTitle,
                currentContent: this.boardContent,
            }
        }, methods: {
            changeNextStep() {
                this.$emit(EVENT_TYPE.CHANGE_STATUS, {});
            }
        }, computed: {
            btnStyle() {
                if (this.currentStatus === STATUS_TYPE.TODO) {
                    return "btn-secondary"
                } else if (this.currentStatus === STATUS_TYPE.DOING) {
                    return "btn-primary"
                } else {
                    return "btn-success disabled"
                }
            }
        },
        props: ["id", "boardTitle", "boardContent", "boardStatus"]
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
