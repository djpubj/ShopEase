package com.shopease.backend.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    @PostMapping("/")
    public String hello(){
        return "hello my side check";
    }
    @PostMapping("/check")
    public String hell(){
        return "hello my side check";
    }
}
