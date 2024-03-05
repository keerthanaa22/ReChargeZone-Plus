package com.recharge.kishore.serviceImpl;

import java.util.HashSet;

import org.springframework.stereotype.Service;

import com.recharge.kishore.service.TokenBlacklist;

import java.util.*;

@Service
public class TokenBlacklistImpl implements TokenBlacklist {
    private Set<String> blacklist = new HashSet<>();

    @Override
    public void addToBlacklist(String token) {
        blacklist.add(token);
    }

    @Override
    public boolean isBlacklisted(String token) {
        return blacklist.contains(token);
    }
}