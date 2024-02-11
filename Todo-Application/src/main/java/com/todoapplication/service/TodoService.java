package com.todoapplication.service;

import com.todoapplication.entity.ToDo;
import com.todoapplication.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TodoService {
    @Autowired
    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public ToDo createTodo(ToDo todo){
        return todoRepository.save(todo);
    }
    public List<ToDo> getAllTodos(){
        return todoRepository.findAll();
    }
    public  void deleteTodoById(long id){
        todoRepository.deleteById(id);
    }
}
