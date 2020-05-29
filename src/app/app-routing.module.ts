import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListetudiantsComponent } from './listetudiants/listetudiants.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DeleteEtudiantComponent } from './delete-etudiant/delete-etudiant.component';


const routes: Routes = [
{ path:'etudiants', component:ListetudiantsComponent},
{path :'add' ,component:CreateEtudiantComponent},
{path :'update/:id' ,component:UpdateEtudiantComponent},
{path :'delete' ,component:DeleteEtudiantComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
