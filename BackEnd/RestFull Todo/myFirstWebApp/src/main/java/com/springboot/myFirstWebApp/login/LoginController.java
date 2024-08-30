package com.springboot.myFirstWebApp.login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
    @Autowired
    private AuthenticationService authenticationService;

    @RequestMapping(value = "login", method = RequestMethod.GET)
//    @ResponseBody
    public  String gotoLogin(){
        return "login";
    }
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public  String gotowelcome(@RequestParam String Name, @RequestParam String Password, ModelMap model){
        if(authenticationService.authenticate(Name,Password)) {
            model.put("Name", Name);
            model.put("Password", Password);
            return "welcome";
        }
       model.put("error", "Invalid username or password");
        return "login";
    }
}

