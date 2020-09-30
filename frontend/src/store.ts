import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex'
import AxiosService from "@/service/axios.service";

Vue.use(Vuex);

export enum Status {
    todo = 'TODO',
    doing = 'DOING',
    done = 'DONE'
}

export interface Item {
    id: string;
    title: string;
    status: Status;
    content: string;
}

export interface TodoList {
    todoList: Item[];
    lastIndex: number;
}

const store: StoreOptions<TodoList> = {
    state: {
        todoList: [],
        lastIndex: 0
    },

    mutations: {
        changeStatus(state, {id, status}: { id: string; status: Status }) {
            state!.todoList.find((item: Item) => item.id === id)!.status = status;
        },
        setTodoList(state, todoList: Item[]) {
            state.todoList = todoList;
        }
    },

    getters: {
        getTodoListByStatus: state => (status: Status) => state.todoList.filter(item => item.status === status),
        getTodoListById: state => (id: string) => (state.todoList.find(item => item.id === id))
    },

    actions: {
        async initData({commit}) {
            await AxiosService.instance.get('/api/item')
                .then(response => {
                    commit('setTodoList', response.data);
                });
        },
        async addTodo({dispatch}, item) {
            await AxiosService.instance.post('/api/item', item)
                .then(response => {
                    dispatch('initData');
                }).catch(err => {
                    alert(err.body);
                });
        },

        async changeTodo({dispatch}, item) {
            console.log(item)
            await AxiosService.instance.put('/api/item', item)
                .then(response => {
                    dispatch('initData');
                }).catch(err => {
                    alert(err.body);
                });
        }
    }
}

export default new Vuex.Store(store);
