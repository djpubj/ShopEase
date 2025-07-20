package com.shopease.backend.database.mongodb.data;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "order")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private long id;
    private long userId;
    private String addressId;
    private List<Item> items;

    @Getter
    @Setter
    public static class Item {
        private long itemId;
        private int quantity;
    }
}

