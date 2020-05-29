import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-delete-etudiant',
  templateUrl: './delete-etudiant.component.html',
  styleUrls: ['./delete-etudiant.component.css']
})
export class DeleteEtudiantComponent implements OnInit {
  etudiants:any;
  id:number;
  constructor(private service:EtudiantService) { }

  public delteEtudiant(id:number){
    let resp= this.service.deleteEtudiant(id);
    resp.subscribe((data)=>this.etudiants=data);
   }

   public getEtudiantById(){
    let resp= this.service.getEtudiant(this.id);
    resp.subscribe((data)=>this.etudiants=data);
   }
   ngOnInit() {
    let resp=this.service.getEtudiantList();
    resp.subscribe((data)=>this.etudiants=data);
  }


}
