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
    <hr/>
    <div class="row">
      <div class="col-12">
        <BoardInputContainer/>
      </div>
    </div>
  </div>
</template>

<script>
    import BoardItem from "./BoardItem";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import {EventBus} from "../main";
    import BoardItemContainer from "./BoardItemContainer";
    import {STATUS_TYPE} from "../main";
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
            changeNextStep(item) {

                if (item.currentStatus === STATUS_TYPE.TODO) {
                    this.doings.push({
                            id: item.currentId,
                            status: STATUS_TYPE.DOING,
                            title: item.currentTitle,
                            content: item.currentContent
                        }
                    );
                    this.todos = this.todos.filter(elem => elem.id !== item.currentId)
                } else if (item.currentStatus === STATUS_TYPE.DOING) {
                    this.dones.push({
                        id: item.currentId,
                        status: STATUS_TYPE.DONE,
                        title: item.currentTitle,
                        content: item.currentContent
                    });
                    this.doings = this.doings.filter(elem => elem.id !== item.currentId)
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
                    {id: '1', status: 'TODO', title: 'hello TODO title', content: 'hello todo board'},
                    {id: '2', status: 'TODO', title: 'hello TODO title', content: 'hello todo board'},
                    {id: '3', status: 'TODO', title: 'hello TODO title', content: 'hello todo board'}
                ],
                doings: [
                    {id: '4', status: 'DOING', title: 'hello DOING title', content: 'hello DOING board'},
                    {id: '5', status: 'DOING', title: 'hello DOING title', content: 'hello DOING board'},
                    {id: '6', status: 'DOING', title: 'hello DOING title', content: 'hello DOING board'}
                ],
                dones: [
                    {id: '7', status: 'DONE', title: 'hello DONE title', content: 'hello DONE board'},
                    {id: '8', status: 'DONE', title: 'hello DONE title', content: 'hello DONE board'},
                    {id: '9', status: 'DONE', title: 'hello DONE title', content: 'hello DONE board'},
                ],
                lastIndex: 0
            }
        }, created() {
            EventBus.$on("click", board => {
                this.changeNextStep(board)
            });
            EventBus.$on("addTodo", item => {
                this.addTodo(item);
            });
        }
    }

</script>

<style scoped>

</style>
