import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex'

Vue.use(Vuex);

export interface Item {
    id: string,
    title: string,
    status: string,
    content: string
}

export interface TodoList {
    todoList: Item[]
}

const store: StoreOptions<TodoList> = {
    state: {
        todoList: [
            {id: '1', status: 'TODO', title: 'hello TODO 1', content: 'hello todo board'},
            {id: '2', status: 'TODO', title: 'hello TODO 2', content: 'hello todo board'},
            {id: '3', status: 'TODO', title: 'hello TODO 3', content: 'hello todo board'},
            {id: '4', status: 'DOING', title: 'hello DOING 4', content: 'hello DOING board'},
            {id: '5', status: 'DOING', title: 'hello DOING 5', content: 'hello DOING board'},
            {id: '6', status: 'DOING', title: 'hello DOING 6', content: 'hello DOING board'},
            {id: '7', status: 'DONE', title: 'hello DONE 7', content: 'hello DONE board'},
            {id: '8', status: 'DONE', title: 'hello DONE 8', content: 'hello DONE board'},
            {id: '9', status: 'DONE', title: 'hello DONE 9', content: 'hello DONE board'}
        ]
    },
    mutations: {
        addTodo(state, item: Item) {
            state.todoList.push(item);
        },
        changeStatus(state, {id, status}: { id: string, status: string }) {
            state.todoList.find((item: Item) => item.id === id)!.status = status;
        },
    },
    getters: {
        getTodoListByStatus: state => (status: string) => state.todoList.filter(item => item.status === status),
    }
}

export default new Vuex.Store(store);
