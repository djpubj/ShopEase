package com.shopease.backend.controller;

import com.shopease.backend.database.mysql.entity.AuthRequest;
import com.shopease.backend.enumfile.Role;
import com.shopease.backend.util.TokenGenerateUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AuthController {
    private final TokenGenerateUtil tokenGenerateUtil;

    public AuthController(TokenGenerateUtil tokenGenerateUtil) {
        this.tokenGenerateUtil = tokenGenerateUtil;
    }

    @GetMapping("/check")
    public String check() {
        return "hello /api/authenticate checked";
    }

    @GetMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) {
        return tokenGenerateUtil.generateToken(authRequest);
    }

    @GetMapping("/grants")
    public List<String> getAllRoles() {
        return Arrays.stream(Role.values())
                .map(Enum::name)
                .toList();
    }
}
