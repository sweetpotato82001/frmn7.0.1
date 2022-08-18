import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit {

  public participant={
    nage:'',
    nageur:'',
    club:false,
    pays:false,
    autre:false,
    equipe:'',
    hors_concours:false,
    bassin:'',
    date:'',
    lieu:''
  };
  hobbiesArray= new FormArray([new FormControl('',Validators.required)]);

  addInputControl(){
    this.hobbiesArray.push(new FormControl('',Validators.required));
  }
  removeInputControl(idx:number){
    this.hobbiesArray.removeAt(idx);
  }
  constructor() { }

  ngOnInit(): void {
  }
  clear1(){}

}
