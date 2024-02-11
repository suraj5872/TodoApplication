package com.todoapplication.controller;
import com.todoapplication.entity.ToDo;
import com.todoapplication.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todos")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
    @Autowired
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }
    @GetMapping("/get-todos")
    public ResponseEntity<List<ToDo>> getAllTodos(){
        List<ToDo> todos= todoService.getAllTodos();
        return ResponseEntity.ok(todos);
    }
    @PostMapping("/create")
    public ResponseEntity<String> createTodo(@RequestBody ToDo todo)
    {
        ToDo createdtodo = todoService.createTodo(todo);
        return ResponseEntity.ok("Todo Created");
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTodoById(@PathVariable Long id) {
        todoService.deleteTodoById(id);
        return ResponseEntity.ok("Todo deleted successfully");
    }
}
