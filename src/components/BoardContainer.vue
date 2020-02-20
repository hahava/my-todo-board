<template>
  <div class="container">
    <h3>MY Todo Board</h3>
    <br>
    <br>
    <div class="row">
      <div class="col-4">
        <BoardItem board-status="TODO"
                   board-title="hello TODO board"
                   board-content="hello board content"/>
        <BoardItem board-status="TODO"
                   board-title="hello TODO board"
                   board-content="hello board content"/>
      </div>
      <div class="col-4">
        <BoardItem board-status="DOING"
                   board-title="hello DONE board"
                   board-content="hello board content"/>
      </div>
      <div class="col-4">
        <BoardItem board-status="DONE"
                   board-title="hello  DOINGboard"
                   board-content="hello board content"/>
      </div>
    </div>
  </div>
</template>

<script>
    import BoardItem from "./BoardItem";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: "BoardContainer",
        components: {
            BoardItem
        }
    }
</script>

<style scoped>

</style>
