package com.capgemini.airlines.controller;

import com.capgemini.airlines.model.Airport;
import com.capgemini.airlines.repository.AirportRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class AirportControllerTest {
    @InjectMocks
    private AirportController controller;

    @Mock
    private AirportRepository repo;

    @Test
    public void testAdd(){
        Mockito.when(this.repo.findAll()).thenReturn(null);

        Iterable<Airport> result = this.controller.getAllAirports();
        Iterable<Airport> expected = null;

        Assert.assertEquals(result,expected);

        Mockito.verify(this.repo).findAll();
    }
}
