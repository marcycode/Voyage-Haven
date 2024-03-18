package org.ehotels;

import java.sql.*;

public class Main {
    public static void main(String[] args) {
        try {
            Connection db = DriverManager.getConnection(
                    "jdbc:postgresql://localhost:5432/sakila",
                    "postgres",
                    "secret"
            );
            System.out.println("Connection established...");
            Statement st = db.createStatement();
            st.executeUpdate(
                    "insert into ehotels.hotel " +
                    "(hotel_p_number, hotel_contact_email, num_of_rooms, rating, postal_code, region, city, street_number, street_name) " +
                    "values (123456788, 'test@test.com', 4, 3, '123456', 'ON', 'Ottawa', '31', 'Irving');");
            ResultSet rs = st.executeQuery("select * from ehotels.hotel");
            while (rs.next()) {
                System.out.print(rs.getString(1) + "   ");
                System.out.print(rs.getString(2) + "   ");
                System.out.print(rs.getString(3) + "   ");
                System.out.print(rs.getString(4) + "   ");
                System.out.print(rs.getString(5) + "   ");
                System.out.print(rs.getString(6) + "   ");
                System.out.print(rs.getString(7) + "   ");
                System.out.print(rs.getString(8) + "   ");
                System.out.println(rs.getString(9));
            }
            rs.close();
            st.close();
        } catch (SQLException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
