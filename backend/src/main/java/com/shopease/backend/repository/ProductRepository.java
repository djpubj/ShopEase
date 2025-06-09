package com.shopease.backend.repository;

import com.shopease.backend.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Products,Long> {
    Optional<Products> findByProductid(Long productid);
    void deleteByProductid(Long productid);
}
