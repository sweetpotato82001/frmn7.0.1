import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition.service';
import Swal from 'sweetalert2';
import { ButtonDetailC1RendererComponent } from '../button-detail-c1-renderer/button-detail-c1-renderer.component';

@Component({
  selector: 'app-edit-competition',
  templateUrl: './edit-competition.component.html',
  styleUrls: ['./edit-competition.component.css']
})
export class EditCompetitionComponent implements OnInit {

  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Competition",field:"competition" , sortable:true,filter:true},
    {headerName:"Start debut",field:"dateDebut", sortable:true,filter:true},
    {headerName:"Place",field:"place", sortable:true,filter:true},
    {headerName:"Bassin",field:"bassinGeneral", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonDetailC1RendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer: ButtonDetailC1RendererComponent
  };
  competitions=[
    {
      id:0,
      competition_name:'',
      date_debut:'',
      lieu:'',
      bassin:'',
    },
    
  ];
  constructor(private _competition:CompetitionService) { }

  ngOnInit(): void {
    this._competition.getAllCompetitions(false).subscribe(
      (data:any)=>{
        this.competitions = data;
      },
      (error: any)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )

  }
}
