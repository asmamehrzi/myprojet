import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {
  etudiant: Etudiant=new Etudiant();
  message:any;

  constructor(private service:EtudiantService) { }
  ngOnInit(): void {
  }
  

  public save(){
 let resp=this.service.createEtudiant(this.etudiant);
 resp.subscribe((data)=>this.message=data);
  }
  
}
