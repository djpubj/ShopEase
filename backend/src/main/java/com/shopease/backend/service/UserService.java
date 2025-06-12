package com.shopease.backend.service;

import com.shopease.backend.entity.AuthRequest;
import com.shopease.backend.entity.Users;
import com.shopease.backend.repository.UserDetailsRepository;
import com.shopease.backend.util.TokenGenerateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
