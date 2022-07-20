import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CrudUsuarioComponent } from './views/crud-usuario/crud-usuario.component';
import { CreateComponent } from './components/crud/create/create.component';
import { UpdateComponent } from './components/crud/update/update.component';
import { DeleteComponent } from './components/crud/delete/delete.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "crud", component: CrudUsuarioComponent },
  { path: "crud/create", component: CreateComponent },
  { path: "crud/update/:id", component: UpdateComponent },
  { path: "crud/delete/:id", component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
