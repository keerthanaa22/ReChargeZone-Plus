package com.recharge.harshid.dto;

import java.util.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
 @Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class AddonRequest {
    private Long addonId;
    public String addonName;
    public double addonPrice;
    public String addonDetails;
    public String addonValidity;
    // public Integer customerId;
}