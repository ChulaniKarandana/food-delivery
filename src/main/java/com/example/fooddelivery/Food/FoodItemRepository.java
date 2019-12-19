package com.example.fooddelivery.Food;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FoodItemRepository extends CrudRepository<FoodItem, Long> {
    List<FoodItem> findByFoodName(String foodName);
    List<FoodItem> findAll();

    @Override
    <S extends FoodItem> S save(S entity);

    @Override
    <S extends FoodItem> Iterable<S> saveAll(Iterable<S> entities);
}
