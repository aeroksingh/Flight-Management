package com.flight.service;

import java.util.List;
import com.flight.entity.Flight;

public interface FlightService {

    Flight save(Flight flight);

    Flight findByCode(String code);

    List<Flight> findByCarrier(String carrier);

    List<Flight> findByRoute(String source, String destination);

    List<Flight> findByPriceRange(Double min, Double max);

    List<Flight> list();

    void delete(String code);
}