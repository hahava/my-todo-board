<template>
  <div id="app">
    <h3>MY Todo Board</h3>
    <br>
    <br>
    <div class="container">
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
  </div>
</template>

<script>
import BoardItem  from "./components/BoardItem"

export default {
  name: 'App',
  components: {
    BoardItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
