package com.recharge.harshid.service;

import java.util.*;
import org.springframework.stereotype.Service;

import com.recharge.harshid.model.Plan;
import com.recharge.harshid.repository.PlanRepository;

@Service
public class PlanService {

    private final PlanRepository planRepository;

    public PlanService(PlanRepository planRepository) {
        this.planRepository = planRepository;
    }

    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    public Optional<Plan> getPlanById(Long planId) {
        return planRepository.findById(planId);
    }

    public Plan createPlan(Plan plan) {
        return planRepository.save(plan);
    }

    public Plan updatePlan(Long planId, Plan updatedPlan) {
        Optional<Plan> existingPlanOptional = planRepository.findById(planId);

        if (existingPlanOptional.isPresent()) {
            Plan existingPlan = existingPlanOptional.get();

            // Update the plan details
            existingPlan.setPlanType(updatedPlan.getPlanType());
            existingPlan.setPlanName(updatedPlan.getPlanName());
            existingPlan.setPlanValidity(updatedPlan.getPlanValidity());
            existingPlan.setPlanDetails(updatedPlan.getPlanDetails());
            existingPlan.setPlanPrice(updatedPlan.getPlanPrice());

            // Save the updated plan
            return planRepository.save(existingPlan);
        } else {
            return null; // or throw an exception
        }
    }

    public void deletePlan(Long planId) {
        Optional<Plan> existingPlanOptional = planRepository.findById(planId);

        existingPlanOptional.ifPresent(planRepository::delete);
    }
}
