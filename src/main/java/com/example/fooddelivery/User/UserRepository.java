package com.example.fooddelivery.User;

import com.example.fooddelivery.Food.FoodItem;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    List<User> findByUserName(String userName);

    @Override
    Optional<User> findById(Long aLong);

    List<User> findAll();

    @Override
    <S extends User> S save(S entity);

    @Override
    <S extends User> Iterable<S> saveAll(Iterable<S> entities);
}
