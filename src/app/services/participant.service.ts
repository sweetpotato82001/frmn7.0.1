import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {


  
  constructor(private http:HttpClient) { }
//add 
public addParticipant(participant:any){
  return this.http.post(`${baseUrl}/participant/`,participant);
}


//update
public updateParticipant(participant:any){
  return this.http.put(`${baseUrl}/participant/update_Participant`,participant);
}
//delete
public deleteParticipant(id:any){
  return this.http.delete(`${baseUrl}/participant/${id}`);
}

//get by id
public getParticipantById(id:any){
  return this.http.get(`${baseUrl}/participant/${id}`);
}
//get all
public getAllParticipant(activity:any){
  return this.http.get(`${baseUrl}/participant/all_Participant/${activity}`);
}

}
