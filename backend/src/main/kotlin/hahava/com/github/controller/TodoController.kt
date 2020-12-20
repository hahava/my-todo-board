package hahava.com.github.controller

import hahava.com.github.model.ToDoStatus
import hahava.com.github.model.TodoItem
import hahava.com.github.service.TodoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/item")
class TodoController(private val todoService: TodoService) {

    @GetMapping
    fun getTodo(): List<TodoItem> {
        return todoService.getItems()
    }

    @GetMapping("/{todoStatus}")
    fun getTodoItemByStatus(@PathVariable todoStatus: ToDoStatus): List<TodoItem> {
        return todoService.getTodoItemByStatus(todoStatus)
    }

    @PostMapping
    fun addTodoItem(@RequestBody todoItem: TodoItem): ResponseEntity<String> {
        todoService.addTodoItem(todoItem)
        return ResponseEntity.ok().build()
    }

    @PutMapping
    fun changeTodoItemStatus(@RequestBody todoItem: TodoItem): ResponseEntity<String> {
        println(todoItem)
        todoService.changeTodoItem(todoItem)
        return ResponseEntity.ok().build()
    }

    @DeleteMapping("/{itemId}")
    fun removeTodoItem(@PathVariable itemId: Long): ResponseEntity<String> {
        todoService.removeTodoItem(itemId)
        return ResponseEntity.ok().build()
    }

}