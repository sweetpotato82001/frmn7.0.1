import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from 'src/app/services/competition.service';
import Swal from 'sweetalert2';
import { ButtonDetailC2RendererComponent } from '../button-detail-c2-renderer/button-detail-c2-renderer.component';

@Component({
  selector: 'app-detail-competition',
  templateUrl: './detail-competition.component.html',
  styleUrls: ['./detail-competition.component.css']
})
export class DetailCompetitionComponent implements OnInit {
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

  
  


}
