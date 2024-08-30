package com.springboot.myFirstWebApp.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SayHelloController {

    @GetMapping("/basicauth")
    public String basicAuthCheck(){
        return "success";
    }
    @RequestMapping("/")
    public String gotoHome(){
        return "list-todo";
    }
    @RequestMapping("/hello-world-bean")
    @ResponseBody
    public String sayHello() {
        return "Hello World! i am studying Spring Boot! hello Spring Boot!";
    }
}
