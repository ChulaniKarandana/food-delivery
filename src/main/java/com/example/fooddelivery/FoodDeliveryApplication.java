package com.example.fooddelivery;

import com.example.fooddelivery.Food.FoodItem;
import com.example.fooddelivery.Food.FoodItemRepository;
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

	@Bean
	public CommandLineRunner demo(@Qualifier("foodItemRepository") FoodItemRepository repository) {
		return (args) -> {
			// save a few customers
			repository.save(new FoodItem(2L,"Rose", 10f));
			log.info("Customers found with findAll():");
		};
	}

}
