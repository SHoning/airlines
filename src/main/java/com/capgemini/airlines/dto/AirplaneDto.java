package com.capgemini.airlines.dto;

import lombok.Data;

@Data
public class AirplaneDto {
    private String airplaneId;
    private int fuelInTons;
    private long airportId;
}
