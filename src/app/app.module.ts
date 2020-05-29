import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListetudiantsComponent } from './listetudiants/listetudiants.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { FormsModule } from '@angular/forms';
import { DeleteEtudiantComponent } from './delete-etudiant/delete-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    ListetudiantsComponent,
    CreateEtudiantComponent,
    UpdateEtudiantComponent,
    DeleteEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
