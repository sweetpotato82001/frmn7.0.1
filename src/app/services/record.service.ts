import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private http:HttpClient) { }

  //get  records By type
  public getRecordByType(type:any){
    return this.http.get(`${baseUrl}/record/${type}`);
  }



  //save records
  public saveRecord(record:any){
    return this.http.put(`${baseUrl}/record/update_record`,record);
  }
  

  //save all records
  public saveAllRecords(records:any){
    return this.http.put(`${baseUrl}/record/update_all_record`,records);
  }

}
