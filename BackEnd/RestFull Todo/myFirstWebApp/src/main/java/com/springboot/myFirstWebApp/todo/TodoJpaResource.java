package com.springboot.myFirstWebApp.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoJpaResource {

//    private TodoService todoService;
    private TodoRepository todoRepository;
    public TodoJpaResource(TodoService todoService, TodoRepository todoRepository) {
//        this.todoService = todoService;
        this.todoRepository = todoRepository;
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> retriveTodos(@PathVariable String username){
        return todoRepository.findByusername(username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo retriveTodos(@PathVariable String username, @PathVariable int id){
        return todoRepository.findById(id).get();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id){
         todoRepository.deleteById(id);
         return ResponseEntity.noContent().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public Todo updateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo){
//        todo.setUsername(username);
        return todoRepository.save(todo);
    }

    @PostMapping("/users/{username}/todos")
    public Todo addTodo(@PathVariable String username, @RequestBody Todo todo){
        todo.setId(null);
        todo.setUsername(username);
        return todoRepository.save(todo);

    }
}
