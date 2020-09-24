import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex'

Vue.use(Vuex);

export enum Status {
    todo = 'TODO',
    doing = 'DOING',
    done = 'DONE'
}

export interface Item {
    id: string,
    title: string,
    status: Status
    content: string
}

export interface TodoList {
    todoList: Item[],
    lastIndex: number
}

const store: StoreOptions<TodoList> = {
    state: {
        todoList: [
            {id: '1', status: Status.todo, title: 'hello TODO 1', content: 'hello todo board'},
            {id: '2', status: Status.todo, title: 'hello TODO 2', content: 'hello todo board'},
            {id: '3', status: Status.todo, title: 'hello TODO 3', content: 'hello todo board'},
            {id: '4', status: Status.doing, title: 'hello DOING 4', content: 'hello DOING board'},
            {id: '5', status: Status.doing, title: 'hello DOING 5', content: 'hello DOING board'},
            {id: '6', status: Status.doing, title: 'hello DOING 6', content: 'hello DOING board'},
            {id: '7', status: Status.done, title: 'hello DONE 7', content: 'hello DONE board'},
            {id: '8', status: Status.done, title: 'hello DONE 8', content: 'hello DONE board'},
            {id: '9', status: Status.done, title: 'hello DONE 9', content: 'hello DONE board'}
        ], lastIndex: 0
    },
    mutations: {
        addTodo(state, item: Item) {
            item.id = state.todoList.length + 1 + ''
            state.todoList.push(item);
        },
        changeStatus(state, {id, status}: { id: string, status: Status }) {
            state.todoList.find((item: Item) => item.id === id)!.status = status;
        },
    },
    getters: {
        getTodoListByStatus: state => (status: Status) => state.todoList.filter(item => item.status === status),
    }
}

export default new Vuex.Store(store);
