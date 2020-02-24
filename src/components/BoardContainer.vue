<template>
  <div class="container">
    <h3>MY Todo Board</h3>
    <br>
    <br>
    <div class="row">
      <BoardItemContainer type="todo">
        <BoardItem board-status="TODO"
                   board-title="hello TODO board"
                   board-content="hello board content"/>
        <BoardItem board-status="TODO"
                   board-title="hello TODO board"
                   board-content="hello board content"/>
      </BoardItemContainer>

      <BoardItemContainer type="doing">
        <BoardItem board-status="DOING"
                   board-title="hello DONE board"
                   board-content="hello board content"/>
      </BoardItemContainer>

      <BoardItemContainer type="done">
        <BoardItem board-status="DONE"
                   board-title="hello  DOING board"
                   board-content="hello board content"/>
      </BoardItemContainer>
    </div>
  </div>
</template>

<script>
    import BoardItem from "./BoardItem";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import {EventBus} from "../eventbus/ClickEvent";
    import BoardItemContainer from "./BoardItemContainer";

    export default {
        name: "BoardContainer",
        components: {
            BoardItemContainer,
            BoardItem
        }
    }

    EventBus.$on("click", boardStatus => {
        console.log(boardStatus);
    })
</script>

<style scoped>

</style>
