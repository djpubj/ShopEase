package com.shopease.backend.controller;

import com.shopease.backend.entity.AuthRequest;
import com.shopease.backend.enumfile.Role;
import com.shopease.backend.entity.Users;
import com.shopease.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/check")
    public String check() {
        return "hello /api/user checked";
    }

    @PostMapping("/adduser")
    public String addUser(@RequestBody AuthRequest authRequest) {
        Users users = new Users();
        users.setUsername(authRequest.getUsername());
        users.setPassword(passwordEncoder.encode(authRequest.getPassword()));
        users.setRole(Role.USER);
        Users saveUser = userService.adduser(users);
        String token = userService.generateToken(authRequest);
        return token;
    }
}
