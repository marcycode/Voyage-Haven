package org.ehotels.gateway.repositories;

import org.ehotels.gateway.entity.HotelChain;
import org.ehotels.gateway.entity.HotelChainId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelChainRepo extends JpaRepository <HotelChain, HotelChainId> {

}
