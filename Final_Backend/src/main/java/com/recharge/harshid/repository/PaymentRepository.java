package com.recharge.harshid.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.recharge.harshid.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{

}


