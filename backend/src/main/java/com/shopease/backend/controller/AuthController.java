package com.shopease.backend.controller;

import com.shopease.backend.entity.AuthRequest;
import com.shopease.backend.util.TokenGenerateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    TokenGenerateUtil tokenGenerateUtil;

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest){
        return tokenGenerateUtil.generateToken(authRequest);
    }
}
