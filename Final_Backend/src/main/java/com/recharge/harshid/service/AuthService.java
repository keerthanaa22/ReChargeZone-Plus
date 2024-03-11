package com.recharge.harshid.service;

import com.recharge.harshid.dto.LoginRequest;
import com.recharge.harshid.dto.LoginResponse;
import com.recharge.harshid.dto.RegisterRequest;
import com.recharge.harshid.dto.RegisterResponse;

public interface AuthService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
    
}
