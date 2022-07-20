package com.alansf.crud.exceptions;

public class NotExistsException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public NotExistsException(String message) {
		super(message);
	}

}
