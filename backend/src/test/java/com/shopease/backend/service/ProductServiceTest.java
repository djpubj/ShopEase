package com.shopease.backend.service;

import com.shopease.backend.entity.Products;
import com.shopease.backend.repository.ProductRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    ProductRepository productRepository;

    @InjectMocks
    ProductService productService;

    @Test
    void testSaveProduct() {
        Products products = new Products();
        products.setProductid(1L);
        products.setName("rohan");
        products.setDescription("nothing");
        products.setPrice(10L);
        products.setQuantity(12);

        Mockito.when(productRepository.save(products)).thenReturn(products);
        Products addedProducts= productService.saveProduct(products);
        productService.saveProduct(products);

        Assertions.assertNotNull(addedProducts);
        Assertions.assertEquals(products.getProductid(),addedProducts.getProductid());
    }
}
