package com.recharge.harshid.serviceImpl;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recharge.harshid.dto.AddonResponse;
import com.recharge.harshid.dto.BasicResponse;
import com.recharge.harshid.dto.DashboardResponse;
import com.recharge.harshid.dto.PlanResponse;
import com.recharge.harshid.dto.UserResponse;
import com.recharge.harshid.model.Addon;
import com.recharge.harshid.model.Customer;
import com.recharge.harshid.model.Plan;
import com.recharge.harshid.model.User;
import com.recharge.harshid.repository.AddonRepository;
import com.recharge.harshid.repository.CustomerRepository;
import com.recharge.harshid.repository.PlanRepository;
import com.recharge.harshid.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import java.util.*;

@RequiredArgsConstructor
@Service
public class ServiceImpl {
    @Autowired
    private AddonRepository addonRepository;
    @Autowired
    private final PlanRepository planRepository;
    private  AddonRepository addonsRepository;
    private  CustomerRepository customerRepository;
    
    @Autowired
    public ServiceImpl(PlanRepository planRepository, AddonRepository addonsRepository,
                                CustomerRepository customerRepository) {
        this.planRepository = planRepository;
        this.addonsRepository = addonsRepository;
        this.customerRepository = customerRepository;
    }

    public BasicResponse<PlanResponse> getPlans() {
        List<Plan> plans = planRepository.findAll();
        List<PlanResponse> planResponses = plans.stream().map(plan ->
            PlanResponse.builder()
                .planId(plan.getPlanId())
                .planType(plan.getPlanType())
                .planName(plan.getPlanName())
                .planDetails(plan.getPlanDetails())
                .planPrice(plan.getPlanPrice())
                .planValidity(plan.getPlanValidity())
                .build())
            .collect(Collectors.toList());
    
        return BasicResponse.<PlanResponse>builder()
            .message("Plans data fetched successfully")
            .data(planResponses)
            .build();
    }
    // public BasicResponse<PlanResponse> getDashbordData() {
    //     List<Customer> usersList = customerRepository.findAll();
    //     Integer users = usersList.size();

    //     List<Plan> plansList = planRepository.findAll();
    //     Integer plans = plansList.size();

    //     List<Addon> addonsList = addonsRepository.findAll();
    //     Integer addons = addonsList.size();

    //     Integer revenue = 9892;
    //     DashboardResponse dashboardData = new DashboardResponse();
    //     dashboardData.setAddons(addons);
    //     dashboardData.setPlans(plans);
    //     dashboardData.setRevenue(revenue);
    //     dashboardData.setUsers(users);
    //     List<DashboardResponse> responses=new ArrayList<>();
    //     responses.add(dashboardData);
    //     List<DashboardResponse> dashboardResponses = responses.stream().map(plan ->
    //         PlanResponse.builder()
    //             .planId(plan.getPlanId())
    //             .planType(plan.getPlanType())
    //             .planName(plan.getPlanName())
    //             .planDetails(plan.getPlanDetails())
    //             .planPrice(plan.getPlanPrice())
    //             .planValidity(plan.getPlanValidity())
    //             .build())
    //         .collect(Collectors.toList());
    
    //     return BasicResponse.<PlanResponse>builder()
    //         .message("Plans data fetched successfully")
    //         .data(planResponses)
    //         .build();
    // }

    // public BasicResponse<DashboardResponse> getDashboardData() {
    //     List<Customer> usersList = customerRepository.findAll();
    //     Integer users = usersList.size();
    
    //     List<Plan> plansList = planRepository.findAll();
    //     Integer plans = plansList.size();
    
    //     List<Addon> addonsList = addonsRepository.findAll();
    //     Integer addons = addonsList.size();
    
    //     Integer revenue = 9892;
        
    //     DashboardResponse dashboardData = DashboardResponse.builder()
    //         .users(users)
    //         .plans(plans)
    //         .addons(addons)
    //         .revenue(revenue)
    //         .build();
    
    //     return BasicResponse.<DashboardResponse>builder()
    //         .message("Dashboard data fetched successfully")
    //         .data(Collections.singletonList(dashboardData))
    //         .build();
    // }

    public DashboardResponse getDashboardData() {
        List<Customer> usersList = customerRepository.findAll();
        Integer users = usersList.size();
    
        List<Plan> plansList = planRepository.findAll();
        Integer plans = plansList.size();
    
        List<Addon> addonsList = addonsRepository.findAll();
        Integer addons = addonsList.size();
    
        Integer revenue = 9892;
    
        return DashboardResponse.builder()
            .users(users)
            .plans(plans)
            .addons(addons)
            .build();
    }
    public BasicResponse<AddonResponse> getAddons() {
        List<Addon> addons = addonRepository.findAll();
        List<AddonResponse> addonResponses = addons.stream().map(addon ->
            AddonResponse.builder()
                .addonId(addon.getAddonId())
                .addonName(addon.getAddonName())
                .addonDetails(addon.getAddonDetails())
                .addonPrice(addon.getAddonPrice())
                .build())
            .collect(Collectors.toList());
    
        return BasicResponse.<AddonResponse>builder()
            .message("Addons data fetched successfully")
            .data(addonResponses)
            .build();
    }
    
    
}

