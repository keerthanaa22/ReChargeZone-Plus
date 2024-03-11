package com.recharge.harshid.serviceImpl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.recharge.harshid.dto.LoginRequest;
import com.recharge.harshid.dto.LoginResponse;
import com.recharge.harshid.dto.RegisterRequest;
import com.recharge.harshid.dto.RegisterResponse;
import com.recharge.harshid.enumerated.Role;
import com.recharge.harshid.model.User;
import com.recharge.harshid.repository.UserRepository;
import com.recharge.harshid.service.AuthService;
import com.recharge.harshid.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthServiceImpl implements AuthService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public RegisterResponse register(RegisterRequest request) {
        System.out.println(request.getEmail());
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        System.out.println(isUserExists);
        if(isUserExists.isPresent())
        {
            return RegisterResponse.builder().message("User with email id "+request.getEmail()+"already exists").build();
        }
        System.out.println("here");
        var user=User.builder()
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .username(request.getPassword())
        .userRole(Role.CUSTOMER)
        .mobileNumber(request.getMobile())
        .build();
        userRepository.save(user);
        System.out.println("saebed");
        return RegisterResponse.builder().message("User created succesfully").build();
        
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        System.out.println("2");
        System.out.println(jwtUtil.generateToken(user));
        var token=jwtUtil.generateToken(user);
        System.out.println(LoginResponse.builder().message("user logged in successfully").token(token).build());
        return LoginResponse.builder().message("user logged in successfully").token(token).build();

    }
    
}
