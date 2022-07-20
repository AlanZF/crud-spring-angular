package com.alansf.crud.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.alansf.crud.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	
	List<User> findAll();
}

