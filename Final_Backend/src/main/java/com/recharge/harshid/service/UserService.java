package com.recharge.harshid.service;

import com.recharge.harshid.dto.BasicResponse;
import com.recharge.harshid.dto.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();
    
}
