package com.shopease.backend.controller;

import com.shopease.backend.entity.AuthRequest;
import com.shopease.backend.entity.Role;
import com.shopease.backend.entity.UserRecieved;
import com.shopease.backend.entity.Users;
import com.shopease.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private final UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/adduser")
    public String addUser(@RequestBody AuthRequest authRequest) {
        Users users = new Users();
        users.setUsername(authRequest.getUsername());
        users.setPassword(passwordEncoder.encode(authRequest.getPassword()));
        users.setRole(Role.USER);
        Users saveUser = userService.adduser(users);
        String token=userService.generateToken(authRequest);
        return token;
    }
}
