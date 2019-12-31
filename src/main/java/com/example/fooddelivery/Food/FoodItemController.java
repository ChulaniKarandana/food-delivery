package com.example.fooddelivery.Food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodItemController {

    @Autowired
    FoodItemRepository foodItemRepository;

    @PostMapping("/create")
    public String createWithoutRequestParam (@RequestBody FoodItem foodItem) {
        if (foodItem.getFoodName() != null){
            foodItemRepository.save(foodItem);
        }
        else {
            System.out.println("Name is null");
        }
        return "Success";
    }

    @PostMapping("/findFoodAll")
    public List<FoodItem> findFoodAll (@RequestBody FoodItem foodItem) {
        List<FoodItem> full_list = foodItemRepository.findAll();
        List<FoodItem> reduced_list = new ArrayList<FoodItem>();
        for (int i=0; i<full_list.size();i++) {
            if (full_list.get(i).getUser_id() == foodItem.getUser_id()) {
                reduced_list.add(full_list.get(i));
            }
        }
        return reduced_list;
    }

    @PostMapping("/deleteFood")
    public String deleteFood (@RequestBody FoodItem foodItem) {
        System.out.println(foodItem.getId());
        foodItemRepository.deleteById(foodItem.getId());
        return "Successfully Deleted!!!";
    }

    @PostMapping("/findFood")
    public Optional<FoodItem> findFood (@RequestBody FoodItem foodItem) {
        System.out.println(foodItem.getId());
        return foodItemRepository.findById(foodItem.getId());
    }

}
