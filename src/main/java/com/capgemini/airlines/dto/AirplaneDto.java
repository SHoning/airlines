package com.capgemini.airlines.dto;

import com.capgemini.airlines.model.Airplane;
import lombok.Data;

@Data
public class AirplaneDto {
    private String airplaneId;
    private int fuelInTons;
    private long airportId;
    private String airportName;
    private long id;

    public AirplaneDto(){
    }

    public AirplaneDto(Airplane airplane){
        this.airplaneId = airplane.getAirplaneId();
        this.fuelInTons = airplane.getFuelInTons();
        this.airportId = airplane.getAirport().getId();
        this.airportName=airplane.getAirport().getName();
        this.id = airplane.getId();
    }
}
