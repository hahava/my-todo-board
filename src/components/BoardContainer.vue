<template>
  <div class="container">
    <h3>MY Todo Board</h3>
    <div class="row">
      <div class="col-12">
        <BoardInputContainer/>
      </div>
    </div>
    <hr/>
    <div class="row">

      <TodoContainer>
        <transition-group name="list">
          <BoardItem v-for="todo in todos" :key="todo.id" :item="todo"/>
        </transition-group>
      </TodoContainer>

      <DoingContainer>
        <transition-group name="list">
          <BoardItem v-for="doing in doings" :key="doing.id" :item="doing"/>
        </transition-group>
      </DoingContainer>

      <DoneContainer>
        <transition-group name="list">
          <BoardItem v-for="done in dones" :key="done.id" :item="done"/>
        </transition-group>
      </DoneContainer>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Component, Vue} from 'vue-property-decorator';
import {EVENT_TYPE, EventBus, Item, STATUS_TYPE} from "@/main";
import BoardItem from "@/components/BoardItem.vue";
import BoardItemContainer from "@/components/BoardItemContainer.vue";
import BoardInputContainer from "@/components/BoardInputContainer.vue";

@Component({
  components: {
    BoardInputContainer,
    BoardItem,
    TodoContainer: BoardItemContainer,
    DoingContainer: BoardItemContainer,
    DoneContainer: BoardItemContainer
  }
})
export default class BoardContainer extends Vue {

  todos = [
    {id: '1', status: 'TODO', title: 'hello TODO 1', content: 'hello todo board'},
    {id: '2', status: 'TODO', title: 'hello TODO 2', content: 'hello todo board'},
    {id: '3', status: 'TODO', title: 'hello TODO 3', content: 'hello todo board'}
  ]
  doings = [
    {id: '4', status: 'DOING', title: 'hello DOING 4', content: 'hello DOING board'},
    {id: '5', status: 'DOING', title: 'hello DOING 5', content: 'hello DOING board'},
    {id: '6', status: 'DOING', title: 'hello DOING 6', content: 'hello DOING board'}
  ]
  dones = [
    {id: '7', status: 'DONE', title: 'hello DONE 7', content: 'hello DONE board'},
    {id: '8', status: 'DONE', title: 'hello DONE 8', content: 'hello DONE board'},
    {id: '9', status: 'DONE', title: 'hello DONE 9', content: 'hello DONE board'},
  ]
  lastIndex = '0'

  changeNextStep(elem) {
    if (elem.status === STATUS_TYPE.TODO) {
      this.todos.splice(this.todos.findIndex(i => i.id === elem.id), 1);
      elem.status = STATUS_TYPE.DOING;
      this.doings.push(elem)
      return;
    }
    if (elem.status === STATUS_TYPE.DOING) {
      this.doings.splice(this.doings.findIndex(i => i.id === elem.id), 1);
      elem.status = STATUS_TYPE.DONE;
      this.dones.push(elem)
      return;
    }
  }

  getLastIndex() {
    return this.todos.length + this.doings.length + this.dones.length + 1 +'';
  }

  addTodo(item) {
    this.todos.push({
      id: this.getLastIndex(),
      status: STATUS_TYPE.TODO,
      title: item.title,
      content: item.content
    })
  }

  created() {
    this.$on(EVENT_TYPE.ADD_TODO, item => {
      this.addTodo(item);
    });
    EventBus.$on(EVENT_TYPE.CHANGE_STATUS, item => {
      this.changeNextStep(item);
    })
  }
}

</script>

<style scoped>
.list-enter-active {
  transition: all 1.2s
}

.list-leave-active {
  transition: all 0.5s;
  opacity: 0;
}

.list-enter {
  opacity: 0;
}
</style>
