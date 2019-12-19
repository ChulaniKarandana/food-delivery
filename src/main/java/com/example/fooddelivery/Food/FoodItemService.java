package com.example.fooddelivery.Food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodItemService implements FoodItemRepository {

    @Autowired
    private FoodItemRepository foodItemRepository;

    public void saveFood(final FoodItem foodItem) {
        if (foodItem == null || (foodItem.getFoodName() == null && foodItem.getCost() == 0)) {
            throw new RuntimeException("You must provide Food details");
        }
        try {
           foodItemRepository.save(foodItem);
        } catch (Exception e) {
            throw new RuntimeException("Error occurred during food item details saving");
        }
    }

    @Override
    public List<FoodItem> findByFoodName(String foodName) {
        return null;
    }

    @Override
    public List<FoodItem> findAll() {
        return null;
    }

    @Override
    public List<FoodItem> findAllById(Iterable<Long> longs) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public void delete(FoodItem entity) {

    }

    @Override
    public void deleteAll(Iterable<? extends FoodItem> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends FoodItem> S save(S entity) {
        return null;
    }

    @Override
    public <S extends FoodItem> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<FoodItem> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long aLong) {
        return false;
    }

}
