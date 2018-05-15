package com.capgemini.airlines.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Airport {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @OneToMany(mappedBy = "airport")
    private List<Airplane> airplanes;
}
