package hahava.com.github.repository

import hahava.com.github.model.ToDoStatus
import hahava.com.github.model.TodoItem
import org.springframework.data.repository.CrudRepository

interface TodoRepository : CrudRepository<TodoItem, Long> {
    fun findTodoItemBystatus(todoStatus: ToDoStatus): List<TodoItem>
}