import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { User } from '../model/user'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  preserveWhitespaces: true
})
export class ReadComponent implements OnInit {

  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'age', 'actions'];
  //dataSource = this.users;

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers() {
    this.service.readUsers().subscribe(users => {
      this.users = users 
      console.log(users)})
  }

}
