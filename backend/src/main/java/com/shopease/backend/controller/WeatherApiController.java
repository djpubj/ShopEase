package com.shopease.backend.controller;

import com.shopease.backend.entity.WeatherResponse;
import com.shopease.backend.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
public class WeatherApiController {

    WeatherService weatherService;

    public WeatherApiController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/check")
    public String check() {
        return "hello /api/user checked";
    }

    @GetMapping("/{city}")
    public ResponseEntity<?> weather(@PathVariable("city") String city) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        WeatherResponse weatherResponse=weatherService.getWeather(city);
        String greeting="";
        if (weatherResponse!=null){
            greeting=""+weatherResponse.getCurrent().getFeelslike()+
                    weatherResponse.getCurrent().getWeatherDescriptions();
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("hello "+"weather :: \n"+greeting);
    }

}
