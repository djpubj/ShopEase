package com.shopease.backend.service;

import com.shopease.backend.entity.ProductList;
import com.shopease.backend.entity.Products;
import com.shopease.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Products> getAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Products> getProductById(Long productId) {
        return productRepository.findByProductid(productId);
    }

    public Products saveProduct(Products product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long productId) {
        productRepository.deleteByProductid(productId);
    }
}
