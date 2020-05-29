import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
etudiant : Etudiant
id:number
  constructor(private service:EtudiantService,private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(){
  this.etudiant=new Etudiant;
  
  this.id= this.route.snapshot.params['id'];
    
  this.service.getEtudiant(this.id)
    .subscribe(data => {
      console.log(data)
      this.etudiant = data;
    }, error => console.log(error));
}


updateEtudiant() {
  this.service.updateEtudiant(this.id, this.etudiant)
    .subscribe(data => console.log(data), error => console.log(error));
  this.etudiant = new Etudiant;
  this.gotoList();
}


onSubmit() {
  this.updateEtudiant();    
}

gotoList() {
  this.router.navigate(['/etudiants']);
}
}
