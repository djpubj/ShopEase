package com.shopease.backend.database.mongodb.repository;

import com.shopease.backend.database.mongodb.data.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CartRepository extends MongoRepository<Cart,Long> {
    Optional<Cart> findById(Long id);
    void deleteById(Long id);
}
