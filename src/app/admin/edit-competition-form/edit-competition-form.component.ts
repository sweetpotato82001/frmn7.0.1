import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from 'src/app/services/competition.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-competition-form',
  templateUrl: './edit-competition-form.component.html',
  styleUrls: ['./edit-competition-form.component.css']
})
export class EditCompetitionFormComponent implements OnInit {

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
 dateDebut = new Date();
 dateFin = new Date();
 periodeValideDebut = new Date();
 periodeValideFin = new Date();
 id:any;
 hidden = false;
 rec_by_cat = false;
 team = ''; 
 couloirs = '';

  constructor(private _competition:CompetitionService, private route:ActivatedRoute, private _router:Router) { }
  


  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.id =id
    this._competition.getCompetitionById(id).subscribe(
      (data:any)=>{
        this.competition=data;
        if(this.competition.team == true) 
        {
          this.team = 'yes';
        }
        else{
          this.team = 'no';
        }
        this.dateDebut = new Date(this.competition.dateDebut);
        this.dateFin = new Date(this.competition.dateFin);
        this.periodeValideDebut = new Date(this.competition.periodeValideDebut);
        this.periodeValideFin = new Date(this.competition.periodeValideFin);
        this.couloirs = this.competition.couloirs.toString();

      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
       
      }
    )
  }

  
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

  formSubmit(){
    this._competition.updateCompetition(this.competition).subscribe(
      (data:any)=>{
        Swal.fire("Success !!", 'Club was updated successfully','success').then(() =>{
          this._router.navigate(['/admin/editCompetition']);
        });
        
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
      }
    )
  }
}
