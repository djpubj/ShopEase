package com.shopease.backend.service;

import com.shopease.backend.database.mysql.entity.AuthRequest;
import com.shopease.backend.database.mysql.entity.Users;
import com.shopease.backend.database.mysql.repository.UserDetailsRepository;
import com.shopease.backend.util.TokenGenerateUtil;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    UserDetailsRepository userDetailsRepository;
    TokenGenerateUtil tokenGenerateUtil;

    public UserService(UserDetailsRepository userDetailsRepository,TokenGenerateUtil tokenGenerateUtil) {
        this.userDetailsRepository = userDetailsRepository;
        this.tokenGenerateUtil=tokenGenerateUtil;
    }

    public Users adduser(Users users) {
        return userDetailsRepository.save(users);
    }

    public String generateToken(AuthRequest authRequest) {
        return tokenGenerateUtil.generateToken(authRequest);
    }
}
