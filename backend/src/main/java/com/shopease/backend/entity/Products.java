package com.shopease.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productid;                     // Unique product ID
    private String name;                 // Product name
    private String description;          // Detailed description
    private double price;                // Price
    private int quantity;                // Inventory count
}
