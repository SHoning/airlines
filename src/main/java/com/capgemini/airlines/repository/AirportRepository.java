package com.capgemini.airlines.repository;

import com.capgemini.airlines.model.Airport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends CrudRepository<Airport,Long> {
}
