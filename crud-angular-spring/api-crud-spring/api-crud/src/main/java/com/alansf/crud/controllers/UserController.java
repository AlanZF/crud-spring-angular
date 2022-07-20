package com.alansf.crud.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alansf.crud.model.User;
import com.alansf.crud.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class UserController {
	
	private final UserService service;
	
	/* Criar um usuário (Retorna 201 para sucesso / 400 para erro) */
	@PostMapping("/create")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		service.createUser(user);
		//System.out.println(user.getName());
		return ResponseEntity.status(HttpStatus.CREATED).body(user);
	}
	
	/* Listar todos os usuários (Retorna 200 sempre) */
	@GetMapping("/list")
	public ResponseEntity<List<User>> listAllUsers() {
		return ResponseEntity.status(HttpStatus.OK).body(service.listAllUsers());
	}
	
	/* Listar usuário por id (Retorna 200 para sucesso / 404 para id inexistente) */
	@GetMapping("/list/{id}")
	public ResponseEntity<Optional<User>> readById(@PathVariable Integer id) {
		return ResponseEntity.status(HttpStatus.OK).body(service.readById(id));
	}
	
	/* Atualizar um usuário (Retorna 204 para sucesso / 400 para usuário inexistente) */
	@PutMapping("/put/{id}")
	public ResponseEntity<User> updateUser(@RequestBody User user, 
			@PathVariable Integer id) {
		Optional<User> optUser = service.readById(id);
		
		User us = optUser.get();
		us.setName(user.getName());
		us.setAge(user.getAge());
		us.setEmail(user.getEmail());
		
		service.updateUser(us);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(us);
	}
	
	/* Deletar um usuário (Retorna 204 para sucesso / 400 para id inexistente) */
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		service.deleteById(id);
		ResponseEntity.status(HttpStatus.NO_CONTENT);
	}

}
