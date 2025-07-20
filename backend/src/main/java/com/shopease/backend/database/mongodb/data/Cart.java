package com.shopease.backend.database.mongodb.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "cart")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
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
