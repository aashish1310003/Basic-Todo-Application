package com.springboot.myFirstWebApp.todo;

//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;

@Controller

public class WelcomeController {
    public String gotoWelcomePage(ModelMap model) {
        model.put("aashis", 1234);
        return "welcome";
    }

//    private String getLoggedinUsername(){
//        Authentication authentication =
//                SecurityContextHolder.getContext().getAuthentication();
//        return authentication.getName();
//    }
}
