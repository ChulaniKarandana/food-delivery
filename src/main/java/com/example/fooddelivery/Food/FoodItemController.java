package com.example.fooddelivery.Food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Arrays;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodItemController {

    @Autowired
    FoodItemRepository foodItemRepository;

    @PostMapping("/bulkcreate")
    public String bulkCreate () {
        foodItemRepository.save(new FoodItem(1L,"Cake", 100));
        foodItemRepository.saveAll(Arrays.asList(new FoodItem(2L,"Rice", 50),
                new FoodItem(3L,"Ice Cream", 60),
                new FoodItem(4L,"Burger", 500)));

        return "Created Successfully!!!";
    }


    @PostMapping("/create")
    public String createWithoutRequestParam (@RequestBody FoodItem foodItem) {
        if (foodItem.getFoodName() != null){
            foodItemRepository.save(foodItem);
            //System.out.println("Cameeeeeeeee"+ foodItem.getFoodName() + "--------");
        }
        else {
            System.out.println("Name is null");
        }
        return "Success";
    }




}
