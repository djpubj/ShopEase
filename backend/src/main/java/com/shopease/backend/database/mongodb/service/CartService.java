package com.shopease.backend.database.mongodb.service;

import com.shopease.backend.database.mongodb.data.Cart;
import com.shopease.backend.database.mongodb.repository.CartRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    public Optional<List<Cart>> getCartByUserId(long id) {
        return cartRepository.findByUserId(id);
    }
    public Optional<Cart> getCartById(long userId) {
        return cartRepository.findById(userId);
    }

    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public void deleteCart(long id) {
        cartRepository.deleteById(id);
    }
}
