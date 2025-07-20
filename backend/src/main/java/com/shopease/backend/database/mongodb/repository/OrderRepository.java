package com.shopease.backend.database.mongodb.repository;

import com.shopease.backend.database.mongodb.data.Order;
import com.shopease.backend.database.mongodb.data.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends MongoRepository<Order,Long> {
    Optional<Order> findById(Long id);
    void deleteById(Long id);
}
