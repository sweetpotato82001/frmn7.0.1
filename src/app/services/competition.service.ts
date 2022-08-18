import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }

  //add Competition
  public addCompetion(competion :any){
    return this.http.post(`${baseUrl}/competition/`,competion);
  }


  //Update Competition
  public updateCompetition(competition:any){
    return this.http.put(`${baseUrl}/competition/update_competition`,competition);
  }

  //Delete Competition
  public deletCompetition(id:any){
    return this.http.delete(`${baseUrl}/competition/${id}`);
  }
  //Get Competion By Id
  public getCompetitionById(id:any){
    return this.http.get(`${baseUrl}/competition/${id}`);
  }
  //Get All Competition
  public getAllCompetitions(activty:any){
    return this.http.get(`${baseUrl}/competition/competitions/${activty}`);
  }
}
