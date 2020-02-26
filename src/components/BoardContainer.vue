<template>
  <div class="container">
    <h3>MY Todo Board</h3>
    <br>
    <br>
    <div class="row">
      <TodoContainer type="todo">
        <BoardItem v-for="(todo, x) in todos" :key="x"
                   :id=todo.id
                   :board-status=todo.status
                   :board-title=todo.title
                   :board-content=todo.content
        />
      </TodoContainer>

      <DoingContainer type="doing">
        <BoardItem v-for="(doing, x) in doings" :key="x"
                   :id=doing.id
                   :board-status=doing.status
                   :board-title=doing.title
                   :board-content=doing.content
        />
      </DoingContainer>

      <DoneContainer type="done">
        <BoardItem v-for="(done, x) in dones" :key="x"
                   :id=done.id
                   :board-status=done.status
                   :board-title=done.title
                   :board-content=done.content
        />
      </DoneContainer>
    </div>
  </div>
</template>

<script>
    import BoardItem from "./BoardItem";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import {EventBus} from "../eventbus/ClickEvent";
    import BoardItemContainer from "./BoardItemContainer";


    let TodoContainer = BoardItemContainer
    let DoingContainer = BoardItemContainer
    let DoneContainer = BoardItemContainer


    export default {
        name: "BoardContainer",
        components: {
            BoardItem, TodoContainer, DoingContainer, DoneContainer
        },
        methods: {
            changeNextStep(item) {
                this.todos = this.todos.filter(elem => elem.id != item.currentId)
                this.doings.push({
                        id: item.currentId,
                        status: item.currentStatus,
                        title: item.currentTitle,
                        content: item.currentContent
                    }
                );
            }
        },
        data() {
            return {
                todos: [
                    {id: '1', status: 'TODO', title: 'hello TODO title', content: 'hello todo board'},
                    {id: '2', status: 'TODO', title: 'hello TODO title', content: 'hello todo board'},
                    {id: '3', status: 'TODO', title: 'hello TODO title', content: 'hello todo board'}
                ],
                doings: [
                    {id: '1', status: 'DOING', title: 'hello DOING title', content: 'hello DOING board'},
                    {id: '2', status: 'DOING', title: 'hello DOING title', content: 'hello DOING board'},
                    {id: '3', status: 'DOING', title: 'hello DOING title', content: 'hello DOING board'}
                ],
                dones: [
                    {id: '1', status: 'DONE', title: 'hello DONE title', content: 'hello DONE board'},
                    {id: '2', status: 'DONE', title: 'hello DONE title', content: 'hello DONE board'},
                    {id: '3', status: 'DONE', title: 'hello DONE title', content: 'hello DONE board'},
                ]
            }
        }, created() {
            EventBus.$on("click", board => {
                this.changeNextStep(board)
            })
        }
    }

</script>

<style scoped>

</style>
