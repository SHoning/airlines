package com.capgemini.airlines.controller;

import com.capgemini.airlines.dto.AirplaneDto;
import com.capgemini.airlines.model.Airplane;
import com.capgemini.airlines.model.Airport;
import com.capgemini.airlines.repository.AirplaneRepository;
import com.capgemini.airlines.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/airplane")
public class AirplaneController {
    @Autowired
    private AirplaneRepository airplaneRepository;

    @Autowired
    private AirportRepository airportRepository;

    @GetMapping("/all")
    public Iterable<Airplane> getAllAirplanes() {
        return airplaneRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Airplane> returnAirplaneById(@PathVariable long id) {
        if (airplaneRepository.findById(id).isPresent()) {
            return ResponseEntity.ok(airplaneRepository.findById(id).get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/new")
    public void createAirplane(AirplaneDto airplaneDto) { //RESPONSE ENTITIES?
        Airplane airplane = new Airplane();

        airplane.setFuelInTons(airplaneDto.getFuelInTons());
        airplane.setAirplaneId(airplaneDto.getAirplaneId());
        Airport airport = this.airportRepository.findById(airplaneDto.getAirportId()).get();
        airplane.setAirport(airport);
        this.airplaneRepository.save(airplane);
    }

    @PutMapping("/update/{id}")
    public void updateAirplane(@PathVariable long id, @RequestBody Airplane airplane) {
        Airplane airplaneToChange = this.airplaneRepository.findById(id).get();
        airplaneToChange.setAirport(airplane.getAirport());
        airplaneToChange.setFuelInTons(airplane.getFuelInTons());
        airplaneToChange.setAirplaneId(airplane.getAirplaneId());

        this.airplaneRepository.save(airplaneToChange);
    }

    @PutMapping("flyPlaneTo/{planeId}/{airportId}")
    public ResponseEntity flyAirplane(@PathVariable long planeId, @PathVariable long airportId){
        Airplane airplane = this.airplaneRepository.findById(planeId).get();
        Airport destination = this.airportRepository.findById(airportId).get();
        if (airplane.getFuelInTons()>= 2 && airplane.getAirport() != destination) {
            //The plane leaves from an airport
            Airport leavingPort = airplane.getAirport();
            List<Airplane> leavingPortList = leavingPort.getAirplanes();
            leavingPortList.remove(airplane);
            leavingPort.setAirplanes(leavingPortList);
            this.airportRepository.save(leavingPort);

            //Destination gains an airplane
            List<Airplane> destinationAirportList = destination.getAirplanes();
            destinationAirportList.add(airplane);
            destination.setAirplanes(destinationAirportList);
            this.airportRepository.save(destination);

            //Plane loses 2 ton of fuel for each flight, and enters a new location
            airplane.setFuelInTons(airplane.getFuelInTons() - 2);
            airplane.setAirport(destination);
            this.airplaneRepository.save(airplane);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAirplane(@PathVariable long id) {
        airplaneRepository.deleteById(id);
    }
}

