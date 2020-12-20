<template>
  <div class="row">
    <TodoContainer :column=columnSize>
      <transition-group name="list">
        <BoardItem v-for="todo in todos" :key="todo.id" :item="todo"/>
      </transition-group>
    </TodoContainer>

    <DoingContainer :column=columnSize>
      <transition-group name="list">
        <BoardItem v-for="doing in doings" :key="doing.id" :item="doing"/>
      </transition-group>
    </DoingContainer>

    <DoneContainer :column=columnSize>
      <transition-group name="list">
        <BoardItem v-for="done in dones" :key="done.id" :item="done"/>
      </transition-group>
    </DoneContainer>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import BoardItemContainer from "@/components/BoardItemContainer.vue";
import BoardItem from "@/components/BoardItem.vue";
import {Item, Status} from "@/store";


@Component({
  components: {
    TodoContainer: BoardItemContainer,
    DoingContainer: BoardItemContainer,
    DoneContainer: BoardItemContainer,
    BoardItem
  }
})
export default class BoardListContainer extends Vue {
  todos: Item[] = []
  doings: Item[] = []
  dones: Item[] = []
  columnSize = 'col-4'

  initRender() {
    this.todos = this.$store.getters.getTodoListByStatus(Status.todo);
    this.doings = this.$store.getters.getTodoListByStatus(Status.doing);
    this.dones = this.$store.getters.getTodoListByStatus(Status.done);
  }

  @Watch('$store.state.todoList', {deep: true})
  storeUpdate() {
    this.initRender()
  }

  @Watch('$route.params.type')
  changeSortStyle(type: string) {
    if (type === 'vertical') {
      this.columnSize = 'col-4'
    } else if (type === 'horizontal') {
      this.columnSize = 'col-12'
    }
  }

  created() {
    this.$store.dispatch('initData')
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