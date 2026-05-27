package com.flight.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.entity.Flight;
import com.flight.exception.FlightNotFoundException;
import com.flight.repository.FlightRepository;
import com.flight.service.FlightService;

@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightRepository repository;

    @Override
    public Flight save(Flight flight) {
        return repository.save(flight);
    }

    @Override
    public Flight findByCode(String code) {
        return repository.findById(code)
                .orElseThrow(() -> new FlightNotFoundException("Flight not found"));
    }

    @Override
    public List<Flight> findByCarrier(String carrier) {
        return repository.findByCarrier(carrier);
    }

    @Override
    public List<Flight> findByRoute(String source, String destination) {
        return repository.findBySourceAndDestination(source, destination);
    }

    @Override
    public List<Flight> findByPriceRange(Double min, Double max) {
        return repository.findByCostBetween(min, max);
    }

    @Override
    public List<Flight> list() {
        return repository.findAll();
    }

    @Override
    public void delete(String code) {
        Flight flight = findByCode(code);
        repository.delete(flight);
    }
}