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
            ResultSet rs = st.executeQuery("select * from ehotels.hotel");
            while (rs.next()) {
                System.out.print(rs.getString(1) + "   ");
                System.out.println(rs.getString(2));
            }
            rs.close();
            st.close();
        } catch (SQLException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
