import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { User } from '../model/user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user = {} as User;

  constructor(private service: CrudService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id');
    if (id != undefined) {
      const idNum = parseInt(id);
      this.service.readById(idNum).subscribe(user => {
        this.user = user
      });
    }
  }

  updateUser(): void {
    this.service.updateUser(this.user).subscribe(() => {
      this.service.showMessage("Usuário atualizado com sucesso");
      this.router.navigate(['/crud']);
    });
  }

  cancel(): void {
    this.router.navigate(['/crud']);
  }

}
