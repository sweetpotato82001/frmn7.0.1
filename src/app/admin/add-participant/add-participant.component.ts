import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import { NageurService } from 'src/app/services/nageur.service';
import { ParticipantService } from 'src/app/services/participant.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {
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
  constructor(private _club:ClubService,private _nageur:NageurService,private _participant:ParticipantService,private _router:Router) { }

  ngOnInit(): void {
    this._club.clubs(false).subscribe(
      (data:any)=>{
        this.clubs = data;
      },
      (error)=>{
        console.log(error);
      }
    );
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

  submitForm(){
        //all done
        this._participant.addParticipant(this.participant).subscribe(
          (date:any)=>{
            Swal.fire("Success !!", 'participant is added successfully','success').then(()=>{
              this._router.navigate(['/admin/viewParticipant']);
            });
          },
          (error)=>{
            console.log(error);
            Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
          }
        )
  }
}
