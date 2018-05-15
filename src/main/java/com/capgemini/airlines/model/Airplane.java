package com.capgemini.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Airplane {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String airplaneId;
    private int fuelInTons;

    @ManyToOne
    @JoinColumn(name="airport_id")
    @JsonIgnore
    private Airport airport;
}
