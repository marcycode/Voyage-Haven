package org.ehotels.gateway.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "works_at")
public class WorksAt {
    @Id
    private String ssn;

    @Column(name = "hotel_p_number")
    private long hotelPNumber;

    @Column(name = "hotel_contact_email")
    private String hotelContactEmail;
}
