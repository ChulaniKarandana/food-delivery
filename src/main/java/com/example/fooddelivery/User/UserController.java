package com.example.fooddelivery.User;

import com.example.fooddelivery.Food.FoodItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloWorldBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return new AuthenticationBean("You are authenticated");
    }

    @PostMapping("/findUser")
    public List<User> findUser (@RequestBody User user) {
        System.out.println(user.getUserId());
        return userRepository.findByUserName(user.getUserName());
    }

    @PostMapping("/findUserToEdit")
    public Optional<User> findUserToEdit (@RequestBody User user) {
        System.out.println(user.getUserId());
        return userRepository.findById(user.getUserId());
    }
}


//spring.security.basic.enable= false