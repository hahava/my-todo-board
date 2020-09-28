package hahava.com.github.repository

import hahava.com.github.model.ToDoStatus
import hahava.com.github.model.TodoItem
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class TodoRepositoryTest {

    @Autowired
    lateinit var todoRepository: TodoRepository

    @Test
    fun saveTodoItem() {
        // given
        val todoItem = TodoItem(
                id = 1L,
                title = "hello todo board",
                content = "hello todo board content",
                status = ToDoStatus.TODO
        )

        // when
        todoRepository.save(todoItem)

        // then
        val newItem = todoRepository.findById(1L).get()
        Assertions.assertEquals(newItem, todoItem)
    }

}