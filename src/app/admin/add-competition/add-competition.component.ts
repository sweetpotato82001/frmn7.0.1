import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CompetitionService } from 'src/app/services/competition.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent implements OnInit {

  public competition={
    
      id : 0,
      competition : '',
      code: '',
      team: false , 
      cotation: '',
      dateDebut: '',
      dateFin: '',
      place: '',
      couloirs: 0,
      deferation: '',
      bassinGeneral: '',
      bassinEngagement: '',
      federation: '',
      qualificaition: false,
      reference: false,
      animation: false,
      periodeValideDebut: '',
      periodeValideFin: '',
      recordForAllCategories: true,
      recordByCategory: true,
      theTwo: true,
      worldWide: false,
      africa: false,
      morocco: false,
      meeting: false,
      disabeled:false
   };
   hidden = false;
   rec_by_cat = false;
   team = ''; 
  constructor(private _competition:CompetitionService,  private _snack:MatSnackBar, private _router:Router) { }

  click1(){
    this.competition.recordByCategory=false;
    this.competition.theTwo=false;
 }
 click2(){
  this.competition.recordForAllCategories=false;
  this.competition.theTwo=false;
 }
 click3(){
     this.competition.recordForAllCategories=false;
     this.competition.recordByCategory=false;
 }
 click4(){
    this.hidden = !this.hidden;
 }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.team == "yes") this.competition.team = true;
    else
       this.competition.team = false;


    this._competition.addCompetion(this.competition).subscribe(
      (data:any)=>{
           Swal.fire("Success !!", 'club is added successfully','success').then(()=>{
          this._router.navigate(['/admin/viewClub']);
        });
      },(error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
      }
    )
  }

  
}
