<template>
  <form>
    <div class="form-group">
      <label for="board-title" class="float-left">Board Title</label>
      <div class="input-group">
        <input type="text"
               class="form-control"
               id="board-title"
               placeholder="Board Title"
               v-model="title"
               :maxlength=maxTitleLength>
        <div class="input-group-prepend">
          <div class="input-group-text"> {{title.length}}/{{maxTitleLength}}</div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="Board-content" class="float-left">Board Content</label>
      <div class="input-group">
        <input type="text"
               class="form-control"
               id="Board-content"
               placeholder="Board Content"
               v-model="content"
               :maxLength=maxContentLength>
        <div class="input-group-prepend">
          <div class="input-group-text"> {{content.length}}/{{maxContentLength}}</div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <a class="btn btn-info float-right text-white" v-on:click="addTodo">submit</a>
    </div>
  </form>
</template>

<script>
    export default {
        name: "BoardInputContainer",
        data() {
            return {
                title: '',
                maxTitleLength: 10,
                content: '',
                maxContentLength: 20,
                errMsg: ''
            }
        }, methods: {
            addTodo() {
                if (this.isInputValid()) {
                    this.$parent.$emit("addTodo", {
                        title: this.title,
                        content: this.content
                    });
                    this.title = ''
                    this.content = ''
                    return;
                }
                alert(this.errMsg);
            },
            isInputValid() {

                if (this.title.length === 0) {
                    this.errMsg = "Title must not be null";
                    return false;
                }

                if (this.content.length === 0) {
                    this.errMsg = "Content must not be null";
                    return false;
                }

                return true
            }
        }
    }
</script>

<style scoped>

</style>
