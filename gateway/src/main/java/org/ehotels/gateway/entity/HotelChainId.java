package org.ehotels.gateway.entity;

import jakarta.persistence.Column;
import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class HotelChainId implements Serializable {
    @Column(name = "chain_p_number")
    private Long chainPNumber;

    @Column(name = "chain_contact_email")
    private String chainContactEmail;
}
