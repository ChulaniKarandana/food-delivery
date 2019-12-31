package com.example.fooddelivery.Order;

public class Order {
    private String food;
    private int amount;
    private Long customerId;

    public Order (String food, int amount, Long customerId) {
        this.food = food;
        this.amount = amount;
        this.customerId = customerId;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }
}
