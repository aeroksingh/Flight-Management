package com.flight;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.flight.entity.Flight;
import com.flight.repository.FlightRepository;

import java.util.List;

@SpringBootTest
class FlightServiceTest {

    @Autowired
    private FlightRepository repository;

    @Test
    void testSave() {

        Flight flight = new Flight(
                "AI101",
                "AirIndia",
                "Nagpur",
                "Delhi",
                5000.00
        );

        repository.save(flight);
    }

    @Test
    void testFindByCarrier() {

        List<Flight> flights =
                repository.findByCarrier("AirIndia");

        System.out.println(flights);
    }

    @Test
    void testFindByPriceRange() {

        List<Flight> flights =
                repository.findByCostBetween(3000.00, 7000.00);

        System.out.println(flights);
    }
}