import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { User } from '../model/user';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  user = {} as User;

  constructor(private service: CrudService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != undefined) {
      const idStr = parseInt(id);
      this.service.readById(idStr).subscribe(user => {
        this.user = user
      });}
  }

  deleteById() {
    const id = this.user.id;
    if(id != undefined) {
      this.service.deleteById(id).subscribe(() => {
        this.service.showMessage("Usuário excluído");
        this.router.navigate(['crud']);
      });
    }
  }

  cancel() {
    this.router.navigate(['crud']);
  }

}
