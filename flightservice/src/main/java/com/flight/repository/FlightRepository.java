package com.flight.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flight.entity.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, String> {

    List<Flight> findByCarrier(String carrier);

    List<Flight> findBySourceAndDestination(String source, String destination);

    List<Flight> findByCostBetween(Double min, Double max);
}