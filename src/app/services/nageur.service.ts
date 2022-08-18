import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class NageurService {

  constructor(private http:HttpClient) { }
  public nageurs(){
    return this.http.get(`${baseUrl}/admin/nageurs`);
  }


  //add Nageur
  public addNageur(nageur :any){
    return this.http.post(`${baseUrl}/nageur/`,nageur);
  }
 
  //get Nageur by id 
  public getNageurById(id:any){
    return this.http.get(`${baseUrl}/nageur/${id}`);
  }
  // Get all Nageurs
  public getAllNageurs(activty:any){
    return this.http.get(`${baseUrl}/nageur/nageurs/${activty}`);
  }

  // get Ordered Nageur
  public getOrderedNageur(){
    return this.http.get(`${baseUrl}/nageur/last_nageur/`);
  }

  //edit Nageur
  public updateNageur(nageur:any){
    return this.http.put(`${baseUrl}/nageur/update_nageur`,nageur);
  }

  //delete Nageur
  public deletNageur(id:any){
    return this.http.delete(`${baseUrl}/nageur/${id}`);
  }

  //transfert Nageur
  public transfertNageur(nageur:any){
    return this.http.post(`${baseUrl}/nageur/transfert`,nageur);
  }

  //Get Nageur by License
  public getNageurByLicense(License:any){
    return this.http.get(`${baseUrl}/nageur/last_record/${License}`);
  }

}
