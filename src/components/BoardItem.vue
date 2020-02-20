<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title float-left">{{boardTitle}}</h5>
      <button class="btn btn-sm float-right"
              v-bind:class="btnStyle"
              v-on:click="changeNextStep">
        {{boardStatus}}
      </button>
      <p class="card-text float-left">{{boardContent}}</p>
    </div>
  </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: "BoardItem",
        data: function () {
            return {}
        }, methods: {
            changeNextStep() {
                if (this.boardStatus === "TODO") {
                    this.boardStatus = "DOING"
                } else if (this.boardStatus === "DOING") {
                    this.boardStatus = "DONE"
                }
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
