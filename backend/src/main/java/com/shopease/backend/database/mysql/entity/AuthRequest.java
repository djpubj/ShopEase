package com.shopease.backend.database.mysql.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthRequest {
    private String gmail;
    private String password;
}
