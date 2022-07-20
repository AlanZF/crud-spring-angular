package com.alansf.crud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alansf.crud.model.User;
import com.alansf.crud.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {

	private final UserRepository repository;

	public List<User> listAllUsers() {
		return repository.findAll();
	}
	
	public Optional<User> readById(Integer id) {
		return repository.findById(id);
	}

	public User createUser(User user) {
		return repository.save(user);
	}

	public User updateUser(User user) {
		return repository.save(user);
	}

	public void deleteById(Integer id) {
		repository.deleteById(id);
	}

}
