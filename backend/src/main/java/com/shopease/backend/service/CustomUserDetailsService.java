package com.shopease.backend.service;

import com.shopease.backend.database.mysql.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserDetailsRepository userDetailsRepository;

    public CustomUserDetailsService(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String customername) throws UsernameNotFoundException {
        return userDetailsRepository.findByUsername(customername)
                .orElseThrow(() -> new UsernameNotFoundException("Customername not found"));
    }

}
