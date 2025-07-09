package com.shopease.backend.service;

import com.shopease.backend.model.ExternalProductModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ExternalProductService {

    private final String productApi = "https://fakestoreapi.com/products";

    @Autowired
    RestTemplate restTemplate;

    public List<ExternalProductModel> getAllExternalProduct() {
        ResponseEntity<List<ExternalProductModel>> response =
                restTemplate
                        .exchange(productApi,
                                HttpMethod.GET, null,
                                new ParameterizedTypeReference<List<ExternalProductModel>>() {
                                });
        return response.getBody();
    }
}
