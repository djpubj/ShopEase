package com.shopease.backend.controller;

import com.shopease.backend.entity.AuthRequest;
import com.shopease.backend.enumfile.Role;
import com.shopease.backend.util.TokenGenerateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    TokenGenerateUtil tokenGenerateUtil;

    @GetMapping("/check")
    public String check() {
        return "hello /api/authenticate checked";
    }
    @GetMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest){
        return tokenGenerateUtil.generateToken(authRequest);
    }

    @GetMapping("/grants")
    public List<String> getAllRoles() {
        return Arrays.stream(Role.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }
}
