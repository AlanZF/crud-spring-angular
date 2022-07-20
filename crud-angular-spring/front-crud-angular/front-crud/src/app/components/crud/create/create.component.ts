import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../crud.service';
import { User } from '../model/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user = {} as User;

  constructor(private service: CrudService,
    private router: Router) { }

  ngOnInit(): void { }

  createUser(): void {
    this.service.createUser(this.user).subscribe(() => {
      this.service.showMessage("Usuário criado");
      this.router.navigate(['/crud']);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }

}
