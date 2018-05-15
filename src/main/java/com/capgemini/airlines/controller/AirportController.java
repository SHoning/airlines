package com.capgemini.airlines.controller;

import com.capgemini.airlines.model.Airport;
import com.capgemini.airlines.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/airport")
public class AirportController {
    @Autowired
    private AirportRepository airportRepository;

    @GetMapping("/all")
    public Iterable<Airport> getAllAirports(){
        return airportRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Airport> returnAirportById(@PathVariable long id){
        if (airportRepository.findById(id).isPresent()) {
            return ResponseEntity.ok(airportRepository.findById(id).get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/new")
    public void createAirport(Airport airport){ //RESPONSE ENTITIES?
        airportRepository.save(airport);
    }

    @PutMapping("/update/{id}")
    public void updateAirport(@PathVariable long id, @RequestBody Airport airport){
        Airport airportToChange = this.airportRepository.findById(id).get();
        airportToChange.setAirplanes(airport.getAirplanes());
        airportToChange.setName(airport.getName());

        this.airportRepository.save(airportToChange);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAirport(@PathVariable long id){
        airportRepository.deleteById(id);
    }
}
