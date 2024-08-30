//package com.springboot.myFirstWebApp.todo;
//import jakarta.validation.Valid;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.ModelMap;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@Controller
//public class TodoController {
//    @Autowired
//    private TodoService todoService;
//
//    @RequestMapping("list-todos")
//    public String listAllTodos(ModelMap model) {
//        List<Todo> todes = todoService.findByUsername("mpg");
//        model.addAttribute("todo",todes);
//        model.addAttribute("size",todes.size());
//        return "todo";
//    }
//
//     @RequestMapping(value = "addTodo",method = RequestMethod.GET)
//    public String showNewTodo(ModelMap model) {
//        Todo todo = new Todo();
//        model.put("todo",todo);
//        return "addTodo";
//    }
//
//    @RequestMapping(value = "addTodo", method = RequestMethod.POST)
//    public String addNewTodo(@RequestParam String description, ModelMap model, @ModelAttribute Todo todo) {
//             Integer id = (Integer) model.get("id");
//             String s = (String) model.get("name");
//             todoService.addTodo(todo.getId(), todo.getDescription(), todo.getTargetDate(), todo.isDone());
////           todoService.addtodo(id, "susi",description,true);
//           return "redirect:/list-todos";
//    }
//    @RequestMapping("delete-todo")
//    public String deleteTodo(@RequestParam Integer id) {
//        todoService.deleteById(id);
//        return "redirect:/list-todos";
//    }
//
//    @RequestMapping(value = "update-todo", method = RequestMethod.GET)
//    public String updateTodo(@RequestParam Integer id, ModelMap model) {
//        Todo todo = todoService.findById(id);
//        model.addAttribute("todo",todo);
//        return "addTodo";
//    }
//
//    @RequestMapping(value = "update-todo", method = RequestMethod.POST)
//    public String showUpdateTodo(@Valid Todo todo) {
//        todoService.updateTodo(todo);
//        return "redirect:/list-todos";
//    }
//
//}
