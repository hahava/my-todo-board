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

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Component, Vue, Watch} from 'vue-property-decorator';
import BoardItem from "@/components/BoardItem.vue";
import BoardItemContainer from "@/components/BoardItemContainer.vue";
import BoardInputContainer from "@/components/BoardInputContainer.vue";
import {Item, Status} from "@/store";

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

  todos: Item[] = []
  doings: Item[] = []
  dones: Item[] = []

  initRender() {
    this.todos = this.$store.getters.getTodoListByStatus(Status.todo);
    this.doings = this.$store.getters.getTodoListByStatus(Status.doing);
    this.dones = this.$store.getters.getTodoListByStatus(Status.done);
  }

  @Watch('$store.state.todoList', {deep: true})
  storeUpdate() {
    this.initRender()
  }

  created() {
    this.initRender()
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
