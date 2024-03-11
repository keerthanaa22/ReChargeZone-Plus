package com.recharge.harshid.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recharge.harshid.dto.BasicResponse;
import com.recharge.harshid.dto.DashboardResponse;
import com.recharge.harshid.dto.PlanResponse;
import com.recharge.harshid.model.Addon;
import com.recharge.harshid.model.Customer;
import com.recharge.harshid.model.Payment;
import com.recharge.harshid.model.Plan;
import com.recharge.harshid.model.Recharge;
import com.recharge.harshid.model.User;
import com.recharge.harshid.repository.AddonRepository;
import com.recharge.harshid.repository.CustomerRepository;
import com.recharge.harshid.repository.PaymentRepository;
import com.recharge.harshid.repository.PlanRepository;
import com.recharge.harshid.repository.RechargeRepository;
import com.recharge.harshid.repository.UserRepository;
import com.recharge.harshid.serviceImpl.ServiceImpl;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.*;

@RestController
@RequestMapping("/temp")
// @RequiredArgsConstructor
public class temp {
    
    
    private  UserRepository userRepository;
    private  AddonRepository addonsRepository;
    private  CustomerRepository customerRepository;
    private  PlanRepository planRepository;
    private  PaymentRepository paymentRepository;
    private RechargeRepository rechargeRepository;
    private ServiceImpl serviceImpl;

    @Autowired
    public temp(UserRepository userRepository, AddonRepository addonsRepository,
                                CustomerRepository customerRepository, PlanRepository planRepository,
                                PaymentRepository paymentRepository, RechargeRepository rechargeRepository,
                                ServiceImpl serviceImpl) {
        this.userRepository = userRepository;
        this.addonsRepository = addonsRepository;
        this.customerRepository = customerRepository;
        this.planRepository = planRepository;
        this.paymentRepository = paymentRepository;
        this.rechargeRepository = rechargeRepository;
        this.serviceImpl = serviceImpl;
    }

    @GetMapping("/test")
    public Recharge UserTest()
    {
        Payment payment = new Payment();
        Recharge recharge= new Recharge();
        // paymentRepository.save(payment);
        rechargeRepository.save(recharge);
    	return recharge;
    }

    @GetMapping("/dashboard/data")
    public ResponseEntity<DashboardResponse> dashboard() {
        try {
            DashboardResponse dashboardData = serviceImpl.getDashboardData(); // Call the method to get dashboard data
            return ResponseEntity.ok(dashboardData); // Return the dashboard data with HTTP status 200 (OK)
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build(); // Return HTTP status 417 (EXPECTATION_FAILED) in case of error
        }
    }
}