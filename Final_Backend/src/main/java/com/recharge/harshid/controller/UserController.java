package com.recharge.harshid.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recharge.harshid.dto.AddonResponse;
import com.recharge.harshid.dto.BasicResponse;
import com.recharge.harshid.dto.PlanResponse;
import com.recharge.harshid.dto.UserResponse;
import com.recharge.harshid.model.Addon;
import com.recharge.harshid.model.Plan;
import com.recharge.harshid.model.User;
import com.recharge.harshid.repository.PlanRepository;
import com.recharge.harshid.repository.UserRepository;
import com.recharge.harshid.service.UserService;
import com.recharge.harshid.serviceImpl.ServiceImpl;

import lombok.RequiredArgsConstructor;

import java.util.*;
import java.util.stream.Collectors;


@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("api/v1/user")
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;
    private final PlanRepository planRepository;
    private final ServiceImpl serviceImpl;

    public UserController(ServiceImpl serviceImpl,UserRepository userRepository, UserService userService, PlanRepository planRepository) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.planRepository = planRepository;
        this.serviceImpl = serviceImpl;
    }

    // @GetMapping("/getUsers")
    // public ResponseEntity<BasicResponse> getAllUsers() {
    //     System.out.println("getUsers");
    //     // BasicResponse<UserResponse> response = new BasicResponse();
    //     try {
    //         BasicResponse response=BasicResponse.builder().message("goodd").build();
    //         // response = userService.getAllUser();
    //         return new ResponseEntity<>(response,HttpStatus.OK);
    //     } catch (Exception e) {
    //         BasicResponse response=BasicResponse.builder().message("null").build();
    //         // response.setMessage("something wnet woring");
    //         return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
    //     }
    // }
    
    // @GetMapping("/getUsers")
    // public ResponseEntity<BasicResponse<UserResponse>> getAllUsers() {
    //     System.out.println("getUsers");
    //     BasicResponse<UserResponse> response = new BasicResponse();
    //     try {
    //         response = userService.getAllUser();
    //         return new ResponseEntity<>(response,HttpStatus.OK);
    //     } catch (Exception e) {
    //         response.setMessage("something wnet woring");
    //         return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
    //     }
    // }
    @GetMapping("/getplans")
    public ResponseEntity<BasicResponse<PlanResponse>> getAllUsers() {
        System.out.println("getUsers");
        BasicResponse<PlanResponse> response = new BasicResponse();
        try {
            response = serviceImpl.getPlans();
            return new ResponseEntity<>(response,HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("something went wrong");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    
    @GetMapping("/getaddons")
public ResponseEntity<BasicResponse<AddonResponse>> getAddons() {
    System.out.println("getAddons");
    BasicResponse<AddonResponse> response = new BasicResponse<>();
    try {
        BasicResponse<AddonResponse> addonsResponse = serviceImpl.getAddons();
        response.setMessage(addonsResponse.getMessage());
        response.setData(addonsResponse.getData());
        return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
        response.setMessage("Something went wrong");
        return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
    }
}



    
    
}