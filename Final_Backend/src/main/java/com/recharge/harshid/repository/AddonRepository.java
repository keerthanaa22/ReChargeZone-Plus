package com.recharge.harshid.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.recharge.harshid.model.Addon;

public interface AddonRepository extends JpaRepository<Addon, Long>{
    @SuppressWarnings("null")
    Page<Addon> findAll(Pageable pageable);
}
