package org.ehotels.gateway.entity;

import org.ehotels.gateway.repositories.HotelChainRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HotelChainController {
    private final HotelChainRepo repo;

    HotelChainController (HotelChainRepo repo) {
        this.repo = repo;
    }

    @GetMapping("/chains")
    List<HotelChain> all() {
        return repo.findAll();
    }
}
