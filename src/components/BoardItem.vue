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
                EventBus.$emit("click", {
                    currentId: this.id,
                    currentStatus: this.boardStatus,
                    currentTitle: this.boardTitle,
                    currentContent: this.boardContent
                });
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
