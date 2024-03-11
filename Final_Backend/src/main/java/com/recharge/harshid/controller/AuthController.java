package com.recharge.harshid.controller;

import org.springframework.web.bind.annotation.RestController;

import com.recharge.harshid.dto.LoginRequest;
import com.recharge.harshid.dto.LoginResponse;
import com.recharge.harshid.dto.RegisterRequest;
import com.recharge.harshid.dto.RegisterResponse;
import com.recharge.harshid.model.Customer;
import com.recharge.harshid.model.User;
import com.recharge.harshid.repository.CustomerRepository;
import com.recharge.harshid.repository.UserRepository;
import com.recharge.harshid.service.AuthService;
import com.recharge.harshid.service.TokenBlacklist;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

import java.util.HashSet;
import java.util.Set;
import org.springframework.http.HttpHeaders;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins="http://localhost:5173")
public class AuthController{

    private final AuthService authService;
    private final TokenBlacklist tokenBlacklist;
    private final UserRepository userRepository;
    private final CustomerRepository customerRepository;
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request)
    {
        System.out.println(request.getEmail());
        System.out.println(request.getPassword());
        RegisterResponse response = new RegisterResponse();
        try{
            response =authService.register(request);
            User temp_user =userRepository.findByEmail(request.getEmail()).get();
            Customer customer = new Customer();
            customer.setCustomerId(temp_user.getId().intValue());
            customer.setCustomerName(request.getUsername());
            User new_user = userRepository.findByEmail(request.getEmail()).get();
            customer.setUser(new_user);
            customerRepository.save(customer);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
        catch(Exception e)
        {
            // response.setMessage("Something went wrong");
            response.setMessage(e.getMessage());
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        System.out.println(request.getEmail());
        System.out.println(request.getPassword());
        LoginResponse response = new LoginResponse();
        try {
            response=authService.login(request);
            System.out.println("hererere");
            System.out.println(response);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        } catch (Exception e) {
            LoginResponse.builder().message("something went wrong").token("").build();
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

    // private static Set<String> blacklist = new HashSet<>();

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
    final String authHeader=request.getHeader(HttpHeaders.AUTHORIZATION);
    String token=authHeader.substring(7);
    tokenBlacklist.addToBlacklist(token);
    System.out.println("dckopasjdcmpdfcklx"+token);
    // Clear session data 

    return ResponseEntity.ok("Logged out successfully");
}   
    
}
