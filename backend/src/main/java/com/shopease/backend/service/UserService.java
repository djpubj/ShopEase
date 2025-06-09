package com.shopease.backend.service;

import com.shopease.backend.entity.AuthRequest;
import com.shopease.backend.entity.UserRecieved;
import com.shopease.backend.entity.Users;
import com.shopease.backend.repository.ProductRepository;
import com.shopease.backend.repository.UserDetailsRepository;
import com.shopease.backend.util.JWTUtil;
import com.shopease.backend.util.TokenGenerateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class UserService {
    UserDetailsRepository userDetailsRepository;

    @Autowired
    TokenGenerateUtil tokenGenerateUtil;

    public UserService(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    public Users adduser(Users users) {
        return userDetailsRepository.save(users);

    }

    public String generateToken(AuthRequest authRequest) {
        return tokenGenerateUtil.generateToken(authRequest);
    }
}
