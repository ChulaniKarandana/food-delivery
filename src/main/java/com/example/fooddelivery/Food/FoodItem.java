package com.example.fooddelivery.Food;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table (name = "food_item")
public class FoodItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "food_name")
    private String foodName;

    @Column (name = "food_cost")
    private float cost;


    public FoodItem (Long id, String foodName, float cost) {
        this.id = id;
        this.foodName = foodName;
        this.cost = cost;
    }

    public FoodItem () {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

    public String getFoodName() {
        return foodName;
    }

    public float getCost() {
        return cost;
    }
}
