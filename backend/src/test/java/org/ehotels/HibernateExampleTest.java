package org.ehotels;

import org.ehotels.model.HotelChain;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class HibernateExampleTest {
    private SessionFactory sessionFactory;

    @BeforeEach
    void setUp() {
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure()
                .build();

        try {
            sessionFactory = new MetadataSources(registry).buildMetadata().buildSessionFactory();
        } catch (Exception e) {
            System.out.println("Failed to create session factory!");
            e.printStackTrace();
            StandardServiceRegistryBuilder.destroy(registry);
        }
    }

    @Test
    void createHotelChain() {
        long phoneNum = 6132544510L;
        HotelChain newChain = new HotelChain(
                phoneNum,
                "test@test.com",
                3,
                "K2K1B0",
                "ON",
                "Kanata",
                "23 A",
                "Street"
        );
        try (Session session = sessionFactory.openSession()) {
            session.beginTransaction();

            session.persist(newChain);

            session.getTransaction().commit();
        }
    }
}
