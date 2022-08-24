import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import { NageurService } from 'src/app/services/nageur.service';
import { ParticipantService } from 'src/app/services/participant.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit {
  public clubs = [
    {
      id: 0,
      name: '',
    }
  ]
  name = 'Angular ' + VERSION.major;
  dynamicArray : any[]=[];
  newDynamic: any;
  addRow() {
    this.dynamicArray.push({ epreuve: '', horsConcours: false, time: '',bassin:'',date:'',place:''});
   this.participant.engagementDetails = this.dynamicArray;
  }
  deleteRow(index: number) {
    this.dynamicArray.splice(index, 1);
  }
  getValues() {
    console.log(this.dynamicArray);
  }
  public participant={
    
      id: 222,
      clubName: 'KPOP',
      nageur: 'YAS',
      equipe: 1,
      baniere:'',
      engagementDetails: [
          {
              id: 223,
              horsConcours: false,
              epreuve: 'test',
              time: '00:00:00',
              bassin: 'grand bassin',
              date: '07-05-0171',
              place: 'casablanca',
              participant: null
          }
      ],
      disabled: false
  };
  type= '';
  id: any;
  public nageurs=[{
    id:0,
    nom:'',
  }]
  hobbiesArray= new FormArray([new FormControl('',Validators.required)]);

  addInputControl(){
    this.hobbiesArray.push(new FormControl('',Validators.required));
  }
  removeInputControl(idx:number){
    this.hobbiesArray.removeAt(idx);
  }
  constructor(private _club:ClubService,private _nageur:NageurService,private _participant:ParticipantService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit(): void {


    this._club.clubs(false).subscribe(
      (data:any)=>{
        this.clubs = data;
      },
      (error)=>{
        console.log(error);
      }
    );
      
    let id = parseInt(this._route.snapshot.paramMap.get('id') || '{}');
    this.id =id
    this._participant.getParticipantById(id).subscribe(
      (data:any)=>{
        this.participant=data;
        this.dynamicArray = this.participant.engagementDetails;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
    this.addRow();
  }
  clear1(){}

  myFunc(){
    this._nageur.getNageurByClub(this.participant.clubName).subscribe(
      (data:any)=>{
        this.nageurs = data;
      }
    )
  }

  

}
