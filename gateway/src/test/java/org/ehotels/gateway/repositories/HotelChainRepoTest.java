package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.HotelChain;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class HotelChainRepoTest {
    @Autowired
    private HotelChainRepo hotelChainRepo;

    @Test
    void saveHotelChain() {
        Long pNum = 3432544510L;
        HotelChain hotelChain = HotelChain.builder()
                .chainPNumber(pNum)
                .chainContactEmail("updateemail@gabe.com")
                .numOfHotels(7)
                .build();
        hotelChainRepo.save(hotelChain);
    }

    @Test
    void listAllHotels() {
        List<HotelChain> chains = hotelChainRepo.findAll();
        chains.forEach(System.out::println);
    }
}