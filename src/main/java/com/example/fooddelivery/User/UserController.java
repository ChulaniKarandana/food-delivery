package com.example.fooddelivery.User;

import com.example.fooddelivery.Food.FoodItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String registerUser (@RequestBody User user) {
        if (user.getUserName() != null){
            userRepository.save(user);
        }
        else {
            System.out.println("Name is null");
        }
        return "Success";
    }
}
