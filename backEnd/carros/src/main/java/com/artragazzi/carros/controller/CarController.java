package com.artragazzi.carros.controller;


import com.artragazzi.carros.car.Car;
import com.artragazzi.carros.car.CarRepository;
import com.artragazzi.carros.car.CarRequestDTO;
import com.artragazzi.carros.car.CarResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("car")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<CarResponseDTO> getAll(){

        List<CarResponseDTO> carList = carRepository.findAll().stream().map(CarResponseDTO::new).toList();
        return carList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveCar(@RequestBody CarRequestDTO obj){
        Car car = new Car(obj);
        carRepository.save(car);
    }
}
