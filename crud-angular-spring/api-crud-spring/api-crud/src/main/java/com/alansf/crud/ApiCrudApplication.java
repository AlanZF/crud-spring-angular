package com.alansf.crud;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.alansf.crud.model.User;
import com.alansf.crud.repository.UserRepository;

@SpringBootApplication
public class ApiCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiCrudApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initDatabase(UserRepository repository) {
		return args -> {
			repository.deleteAll();
			
			User us = new User();
			us.setName("User Test");
			us.setEmail("usertest@email.com");
			us.setAge(10);
			
			User us2 = new User();
			us2.setName("Alan Freitas");
			us2.setEmail("alanfreitas@email.com");
			us2.setAge(25);
			
			User us3 = new User();
			us3.setName("Luke Skywalker");
			us3.setEmail("lukesky@email.com");
			us3.setAge(20);
			
			repository.save(us);
			repository.save(us2);
			repository.save(us3);
		};
	}

}
