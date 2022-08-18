import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition.service';
import Swal from 'sweetalert2';
import { ButtonDetailCRendererComponent } from '../button-detail-c-renderer/button-detail-c-renderer.component';

@Component({
  selector: 'app-competition-history',
  templateUrl: './competition-history.component.html',
  styleUrls: ['./competition-history.component.css']
})
export class CompetitionHistoryComponent implements OnInit {
  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Competition",field:"competition" , sortable:true,filter:true},
    {headerName:"Start debut",field:"dateDebut", sortable:true,filter:true},
    {headerName:"Place",field:"place", sortable:true,filter:true},
    {headerName:"Bassin",field:"bassinGeneral", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonDetailCRendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer: ButtonDetailCRendererComponent
  };
  competitions=[
    {
      id:0,
      competition:'',
      dateDebut:'',
      place:'',
      bassinGeneral:'',
    },
    
  ];
  constructor(private _competition: CompetitionService) { }

  ngOnInit(): void {
      this._competition.getAllCompetitions(true).subscribe(
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
