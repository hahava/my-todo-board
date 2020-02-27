<template>
  <form>
    <div class="form-group">
      <label for="board-title" class="float-left">Board Title</label>
      <input type="text" class="form-control" id="board-title" placeholder="Board Title" v-model="title">
    </div>
    <div class="form-group">
      <label for="Board-content" class="float-left">Board Content</label>
      <input type="text" class="form-control" id="Board-content" placeholder="Board Content" v-model="content">
    </div>
    <div class="form-group">
      <a class="btn btn-secondary float-right" v-on:click="addTodo">입력</a>
    </div>
  </form>
</template>

<script>
    import {EventBus} from "../main";

    export default {
        name: "BoardInputContainer",
        data() {
            return {
                title: '',
                content: ''
            }
        }, methods: {
            addTodo() {
                EventBus.$emit("addTodo", {
                    title: this.title,
                    content: this.content
                });
                this.title = ''
                this.content = ''
            }
        }
    }
</script>

<style scoped>

</style>
