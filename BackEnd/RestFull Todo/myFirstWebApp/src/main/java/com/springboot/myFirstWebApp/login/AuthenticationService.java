package com.springboot.myFirstWebApp.login;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    public boolean authenticate(String username, String password) {
         return username.equalsIgnoreCase("AASHISH A S")&&password.equalsIgnoreCase("1234");
    }
}
