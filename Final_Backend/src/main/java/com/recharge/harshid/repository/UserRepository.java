package com.recharge.harshid.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.recharge.harshid.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
	public Optional<User> findByEmail(String email);
	
}
