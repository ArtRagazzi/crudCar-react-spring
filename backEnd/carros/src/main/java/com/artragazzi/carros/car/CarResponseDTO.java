package com.artragazzi.carros.car;

public record CarResponseDTO(Long id, String title, String image, Double price) {


    public CarResponseDTO(Car car){
        this(car.getId(),car.getTitle(),car.getImage(), car.getPrice());
    }
}
