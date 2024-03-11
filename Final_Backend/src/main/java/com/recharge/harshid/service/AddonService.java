package com.recharge.harshid.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recharge.harshid.model.Addon;
import com.recharge.harshid.repository.AddonRepository;

@Service
public class AddonService {

    private final AddonRepository addonRepository;

    @Autowired
    public AddonService(AddonRepository addonRepository) {
        this.addonRepository = addonRepository;
    }

    public List<Addon> getAllAddons() {
        return addonRepository.findAll();
    }

    public Optional<Addon> getAddonById(Long addonId) {
        return addonRepository.findById(addonId);
    }

    public Addon createAddon(Addon addon) {
        return addonRepository.save(addon);
    }

    public Addon updateAddon(Long addonId, Addon updatedAddon) {
        Optional<Addon> existingAddonOptional = addonRepository.findById(addonId);

        if (existingAddonOptional.isPresent()) {
            Addon existingAddon = existingAddonOptional.get();

            // Update the addon details
            existingAddon.setAddonName(updatedAddon.getAddonName());
            existingAddon.setAddonDetails(updatedAddon.getAddonDetails());
            existingAddon.setAddonPrice(updatedAddon.getAddonPrice());

            // Save the updated addon
            return addonRepository.save(existingAddon);
        } else {
            return null; // or throw an exception
        }
    }

    public void deleteAddon(Long addonId) {
        Optional<Addon> existingAddonOptional = addonRepository.findById(addonId);

        existingAddonOptional.ifPresent(addonRepository::delete);
    }
}