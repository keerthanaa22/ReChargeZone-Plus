package com.recharge.harshid.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.recharge.harshid.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
