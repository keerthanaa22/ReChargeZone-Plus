package com.recharge.kishore.service;

import java.util.*;
import org.springframework.stereotype.Service;

import com.recharge.kishore.model.Plan;
import com.recharge.kishore.model.Recharge;
import com.recharge.kishore.repository.PlanRepository;
import com.recharge.kishore.repository.RechargeRepository;

@Service
public class RechargeService {

    // @Autowired
    private PlanRepository planRepository;

    // @Autowired
    private RechargeRepository rechargeRepository;

    // Other necessary dependencies...

    public String rechargePlan(Long planId, Recharge rechargeRequest) {
        try {
            // Retrieve the plan from the database
            Optional<Plan> optionalPlan = planRepository.findById(planId);

            if (optionalPlan.isPresent()) {
                Plan plan = optionalPlan.get();

                // Create a new recharge
                Recharge recharge = new Recharge();
                recharge.setRechargePrice(rechargeRequest.getRechargePrice());
                recharge.setStatus("Success"); // You may adjust this based on your logic
                recharge.setDate(new Date());
                recharge.setPlan(plan);

                // Save the recharge to the database
                rechargeRepository.save(recharge);

                // Add the recharge to the plan's recharges list
                if (plan.getRecharges() == null) {
                    plan.setRecharges(new ArrayList<>());
                }
                plan.getRecharges().add(recharge);

                // Update the plan in the database
                planRepository.save(plan);

                return "Plan recharged successfully";
            } else {
                return "Plan not found";
            }
        } catch (Exception e) {
            // Log the exception
            return "An error occurred during recharge";
        }
    }
}
