import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { Observable } from 'rxjs';
import { Etudiant } from '../etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listetudiants',
  templateUrl: './listetudiants.component.html',
  styleUrls: ['./listetudiants.component.css']
})
export class ListetudiantsComponent implements OnInit {
 etudiants:Observable<Etudiant[]>;
  constructor(private etudiantservice:EtudiantService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
this.etudiants=this.etudiantservice.getEtudiantList();
  }

  deleteEtudiant(id: number) {
    this.etudiantservice.deleteEtudiant(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEtudiant(id: number){
    this.router.navigate(['update', id]);
  }



}
