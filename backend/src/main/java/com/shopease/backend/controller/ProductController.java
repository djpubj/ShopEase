package com.shopease.backend.controller;


import com.shopease.backend.entity.Products;
import com.shopease.backend.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    // Constructor injection
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // GET all products
    @GetMapping("/all")
    public ResponseEntity<List<Products>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    // GET product by ID
    @GetMapping("/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable("id") Long id) {
        return productService.getProductById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST new product
    @PostMapping("/admin")
    @PreAuthorize("hasAuthority('PRODUCT_WRITE')")
    public ResponseEntity<Products> createProduct(@RequestBody Products product) {
        Products savedProduct = productService.saveProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }

    // DELETE product
    @DeleteMapping("/admin/{id}")
    @PreAuthorize("hasAuthority('PRODUCT_DELETE')")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

//
//    @GetMapping("/grants")
//    public List<String> getAllRoles() {
//        return Arrays.stream(Role.values())
//                .map(Enum::name)
//                .collect(Collectors.toList());
//    }

}
