package hahava.com.github.service

import hahava.com.github.model.ToDoStatus
import hahava.com.github.model.TodoItem
import hahava.com.github.repository.TodoRepository
import org.springframework.stereotype.Service
import java.util.*
import javax.persistence.EntityManager

@Service
class TodoService(
        private val todoRepository: TodoRepository,
        private val entityManager: EntityManager
) {

    fun getItemById(id: Long): Optional<TodoItem> {
        return todoRepository.findById(id)
    }

    fun getTodoItemByStatus(todoStatus: ToDoStatus): List<TodoItem> {
        return todoRepository.findTodoItemBystatus(todoStatus)
    }

    fun addTodoItem(todoItem: TodoItem) {
        todoRepository.save(todoItem)
    }

    fun changeTodoItem(todoItem: TodoItem) {
        val oldTodoItem = getItemById(todoItem.id!!).get()
        oldTodoItem.status = todoItem.status
        oldTodoItem.title = todoItem.title
        oldTodoItem.content = todoItem.content

        entityManager.persist(oldTodoItem)
    }

    fun removeTodoItem(itemId: Long) {
        val targetItem = getItemById(itemId).get()

        todoRepository.delete(targetItem)
    }

}