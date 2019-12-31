package com.example.fooddelivery.Food;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface FoodItemRepository extends CrudRepository<FoodItem, Long> {
    //List<FoodItem> findById(Long id);
    List<FoodItem> findAll();

    @Override
    Optional<FoodItem> findById(Long aLong);

    @Override
    void deleteById(Long aLong);

    @Override
    <S extends FoodItem> S save(S entity);

    @Override
    <S extends FoodItem> Iterable<S> saveAll(Iterable<S> entities);
}
