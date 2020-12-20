package hahava.com.github.model

import javax.persistence.*

@Entity
data class TodoItem(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long?,

        @Column(nullable = false)
        var title: String,

        @Column(nullable = false)
        var content: String,

        @Column(nullable = false)
        @Enumerated(EnumType.STRING)
        var status: ToDoStatus
)