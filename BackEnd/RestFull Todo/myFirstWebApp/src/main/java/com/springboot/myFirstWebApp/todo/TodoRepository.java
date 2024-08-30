package com.springboot.myFirstWebApp.todo;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface TodoRepository extends JpaRepository<Todo, Integer> {
    List<Todo> findByusername(String username);
}

//public interface TodoRepository extends MongoRepository<Todo,Integer> {
//    List<Todo> findByusername(String username);
//}
