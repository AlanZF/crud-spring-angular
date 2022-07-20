import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';

import { User } from './model/user';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private readonly API = "api/";

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.API + 'create',
      user, this.httpOptions)
      .pipe(
        map((obj) => obj),
        catchError(error => this.errorHandler(error))
      );
  }

  readUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API + 'list',
      this.httpOptions)
      .pipe(
        map((obj) => obj),
        catchError(error => this.errorHandler(error))
      );
  }

  readById(id: number): Observable<User> {
    const idStr = id.toString();
    const url = `${this.API}/${'list'}/${idStr}`;
    return this.http.get<User>(url, this.httpOptions)
      .pipe(
        map((obj) => obj),
        catchError(error => this.errorHandler(error))
      );
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.API}/${'put'}/${user.id}`;
    return this.http.put<User>(url, user, this.httpOptions)
      .pipe(
        map((obj) => obj),
        catchError(error => this.errorHandler(error))
      );
  }

  deleteById(id: number): Observable<any> {
    const idStr = id.toString();
    const url = `${this.API}/${'delete'}/${idStr}`;
    return this.http.delete<any>(url, this.httpOptions)
      .pipe(
        map((obj) => obj),
        catchError(error => this.errorHandler(error))
      );
  }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(error: any): Observable<any> {
    this.showMessage("Ocorreu um erro. Não é possível carregar ou salvar as informações.", true)
    return EMPTY;
  }
  
}

