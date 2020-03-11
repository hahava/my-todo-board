<template>
  <div class="container">
    <h3>MY Todo Board</h3>
    <br>
    <br>

    <div class="row">
      <div class="col-12">
        <BoardInputContainer/>
      </div>
    </div>
    <hr/>
    <div class="row">
      <TodoContainer>
        <BoardItem v-for="todo in todos" :key="todo.id"
                   :id=todo.id
                   :board-status=todo.status
                   :board-title=todo.title
                   :board-content=todo.content
                   @changeStatus="changeNextStep(todo)"
        />
      </TodoContainer>

      <DoingContainer>
        <BoardItem v-for="doing in doings" :key="doing.id"
                   :id=doing.id
                   :board-status=doing.status
                   :board-title=doing.title
                   :board-content=doing.content
                   @changeStatus="changeNextStep(doing)"
        />
      </DoingContainer>

      <DoneContainer>
        <BoardItem v-for="done in dones" :key="done.id"
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
    import {EVENT_TYPE, STATUS_TYPE} from "../main";
    import BoardItemContainer from "./BoardItemContainer";
    import BoardInputContainer from "./BoardInputContainer";


    let TodoContainer = BoardItemContainer
    let DoingContainer = BoardItemContainer
    let DoneContainer = BoardItemContainer


    export default {
        name: "BoardContainer",
        components: {
            BoardInputContainer,
            BoardItem, TodoContainer, DoingContainer, DoneContainer
        },
        methods: {
            changeNextStep(elem) {
                if (elem.status === STATUS_TYPE.TODO) {
                    this.todos.splice(this.todos.findIndex(i => i.id === elem.id), 1);
                    this.doings.push({
                        id: elem.id,
                        status: STATUS_TYPE.DOING,
                        title: elem.title,
                        content: elem.content
                    })
                } else if (elem.status === STATUS_TYPE.DOING) {
                    this.doings.splice(this.doings.findIndex(i => i.id === elem.id), 1);
                    this.dones.push({
                        id: elem.id,
                        status: STATUS_TYPE.DONE,
                        title: elem.title,
                        content: elem.content
                    })
                }
            },
            getLastIndex() {
                return this.todos.length + this.doings.length + this.dones.length + 1;
            },
            addTodo(item) {
                this.todos.push({
                    id: this.getLastIndex(),
                    status: STATUS_TYPE.TODO,
                    title: item.title,
                    content: item.content
                })
            }
        },
        data() {
            return {
                todos: [
                    {id: '1', status: 'TODO', title: 'hello TODO 1', content: 'hello todo board'},
                    {id: '2', status: 'TODO', title: 'hello TODO 2', content: 'hello todo board'},
                    {id: '3', status: 'TODO', title: 'hello TODO 3', content: 'hello todo board'}
                ],
                doings: [
                    {id: '4', status: 'DOING', title: 'hello DOING 4', content: 'hello DOING board'},
                    {id: '5', status: 'DOING', title: 'hello DOING 5', content: 'hello DOING board'},
                    {id: '6', status: 'DOING', title: 'hello DOING 6', content: 'hello DOING board'}
                ],
                dones: [
                    {id: '7', status: 'DONE', title: 'hello DONE 7', content: 'hello DONE board'},
                    {id: '8', status: 'DONE', title: 'hello DONE 8', content: 'hello DONE board'},
                    {id: '9', status: 'DONE', title: 'hello DONE 9', content: 'hello DONE board'},
                ],
                lastIndex: 0
            }
        }, created() {
            this.$on(EVENT_TYPE.ADD_TODO, item => {
                this.addTodo(item);
            });
        }
    }

</script>

<style scoped>

</style>
