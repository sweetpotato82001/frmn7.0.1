import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EpreuveService {

  constructor(private http:HttpClient) { }

    //add 
    public addEpreuve(epreuve:any){
      return this.http.post(`${baseUrl}/epreuve/`,epreuve);
    }


    //update
    public updateEpreuve(epreuve:any){
      return this.http.put(`${baseUrl}/epreuve/update_epreuve`,epreuve);
    }
    //delete
    public deleteEpreuve(id:any){
      return this.http.delete(`${baseUrl}/epreuve/${id}`);
    }
    
    //get by id
    public getEpreuveById(id:any){
      return this.http.get(`${baseUrl}/epreuve/${id}`);
    }
    //get all
    public getAllEpreuve(activity:any){
      return this.http.get(`${baseUrl}/epreuve/all_epreuve/${activity}`);
    }

  

}
