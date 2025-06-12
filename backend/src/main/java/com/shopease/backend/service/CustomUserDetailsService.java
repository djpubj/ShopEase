package com.shopease.backend.service;

import com.shopease.backend.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserDetailsRepository customerDetailsRepository;

    @Override
    public UserDetails loadUserByUsername(String cutomername) throws UsernameNotFoundException {
        return customerDetailsRepository.findByUsername(cutomername)
                .orElseThrow(()-> new UsernameNotFoundException("Customername not found"));
    }

}
