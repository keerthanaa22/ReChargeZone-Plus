package com.recharge.harshid.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity 
@Table(name ="plan") 
public class Plan {
    @Id
    // @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long planId;
    private String planType;
    private String planName;
    private String planValidity;
    private String planDetails;
    private double planPrice;
    public Object getRecharges() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getRecharges'");
    }
    public void setRecharges(ArrayList arrayList) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setRecharges'");
    }

   // @OneToMany(mappedBy = "plan")
   // private List<Recharge> recharges;
}