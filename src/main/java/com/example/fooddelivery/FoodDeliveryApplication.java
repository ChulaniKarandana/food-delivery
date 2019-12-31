package com.example.fooddelivery;

import com.example.fooddelivery.Food.FoodItem;
import com.example.fooddelivery.Food.FoodItemRepository;
import com.example.fooddelivery.User.User;
import com.example.fooddelivery.User.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class FoodDeliveryApplication {

	private static final Logger log = LoggerFactory.getLogger(FoodDeliveryApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(FoodDeliveryApplication.class, args);
	}

/*
	@Bean
	public CommandLineRunner demo1(@Qualifier("foodItemRepository") FoodItemRepository repository) {
		return (args) -> {
			// save a few customers
			repository.save(new FoodItem(2L,"Rose", 10f));
			log.info("Customers found with findAll():");
		};
	}
*/
/*
	@Bean
	public CommandLineRunner demo2(@Qualifier("userRepository") UserRepository repository) {
		return (args) -> {
			// save a few customers
			repository.save(new User(2L,"Jack", "1234"));
			log.info("Stored a User...:");
		};
	}*/

}
