import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './crud-usuario.component.html',
  styleUrls: ['./crud-usuario.component.css'],
  preserveWhitespaces: true
})
export class CrudUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToRouterCreate(): void {
    this.router.navigate(["/crud/create"]);
  }
}
