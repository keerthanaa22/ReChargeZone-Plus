package com.recharge.harshid.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.recharge.harshid.model.Plan;
import com.recharge.harshid.model.User;

import java.util.*;

public interface PlanRepository extends JpaRepository<Plan, Long>{
    // Page<Plan> findAll(Pageable pageable);
    @SuppressWarnings("null")
    public List<Plan> findAll();

}
