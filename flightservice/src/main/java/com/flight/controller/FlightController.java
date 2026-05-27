package com.flight.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flight.entity.Flight;
import com.flight.service.FlightService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/flights")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {

    @Autowired
    private FlightService service;

    @PostMapping
    public Flight save(@Valid @RequestBody Flight flight) {
        return service.save(flight);
    }

    @GetMapping("/{code}")
    public Flight findByCode(@PathVariable String code) {
        return service.findByCode(code);
    }

    @GetMapping("/carrier/{carrier}")
    public List<Flight> findByCarrier(@PathVariable String carrier) {
        return service.findByCarrier(carrier);
    }

    @GetMapping("/route")
    public List<Flight> findByRoute(@RequestParam String source,
                                    @RequestParam String destination) {

        return service.findByRoute(source, destination);
    }

    @GetMapping("/price")
    public List<Flight> findByPriceRange(@RequestParam Double min,
                                         @RequestParam Double max) {

        return service.findByPriceRange(min, max);
    }

    @GetMapping
    public List<Flight> list() {
        return service.list();
    }

    @DeleteMapping("/{code}")
    public String delete(@PathVariable String code) {

        service.delete(code);

        return "Flight deleted successfully";
    }
}