import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }


  getEtudiant(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/api/etudiant/id");
  }

  public getEtudiantList():Observable<any>{
    return this.http.get("http://localhost:8080/api/etudiants");
  }


  createEtudiant(etudiant) {
    return this.http.post("http://localhost:8080/api/create-compte", etudiant,{responseType:'text' as 'json'});
   
  }

  updateEtudiant(id: number, value: any): Observable<Object> {
    return this.http.put("http://localhost:8080/api/update/id", value);
  }

  deleteEtudiant(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/api/cance/id");
  }

}
