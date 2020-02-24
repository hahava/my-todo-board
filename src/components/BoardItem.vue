<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title float-left">{{currentTitle}}</h5>
      <button class="btn btn-sm float-right"
              v-bind:class="btnStyle"
              v-on:click="changeNextStep">
        {{currentStatus}}
      </button>
      <p class="card-text float-left">{{currentContent}}</p>
    </div>
  </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import {EventBus} from "../eventbus/ClickEvent";

    export default {
        name: "BoardItem",
        data: function () {
            return {
                currentStatus: this.boardStatus,
                currentTitle: this.boardTitle,
                currentContent: this.boardContent
            }
        }, methods: {
            changeNextStep() {
                if (this.boardStatus === "TODO") {
                    this.boardStatus = "DOING"
                } else if (this.boardStatus === "DOING") {
                    this.boardStatus = "DONE"
                }
                EventBus.$emit("click", this.currentStatus);
            }
        }, computed: {
            btnStyle() {
                if (this.boardStatus === "TODO") {
                    return "btn-secondary"
                } else if (this.boardStatus === "DONE") {
                    return "btn-primary"
                } else {
                    return "btn-success"
                }
            }
        },
        props: ["boardTitle", "boardContent", "boardStatus"]
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
