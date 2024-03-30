package org.ehotels.gateway.entity;

public enum CustomerIdType {
    SIN("SIN"),
    LICENCE("Driving Licence");

    private String strMapping;

    CustomerIdType(String strMapping) {
        this.strMapping = strMapping;
    }

    public String getStrMapping() {
        return strMapping;
    }
}
