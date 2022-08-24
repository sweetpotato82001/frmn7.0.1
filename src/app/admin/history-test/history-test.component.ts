import { Component, OnInit } from '@angular/core';
import { EpreuveService } from 'src/app/services/epreuve.service';
import Swal from 'sweetalert2';
import { ButtonParticipantRendererComponent } from '../button-participant-renderer/button-participant-renderer.component';
@Component({
  selector: 'app-history-test',
  templateUrl: './history-test.component.html',
  styleUrls: ['./history-test.component.css']
})
export class HistoryTestComponent implements OnInit {

  columnDefs=[
    {headerName:"No",field:"no", sortable:true,filter:true},
    {headerName:"Nage",field:"nage" , sortable:true,filter:true},
    {headerName:"Date",field:"date", sortable:true,filter:true},
    {headerName:"Classement",field:"classement", sortable:true,filter:true},
    {headerName:"Nb finales",field:"nb", sortable:true,filter:true},
    {headerName:"Finale",field:"finale", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonParticipantRendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer:ButtonParticipantRendererComponent
  };
  tests=[
    {
      no:'',
      nage:'',
      date:'',
      classement:'',
      nb:'',
      finale:'',
      qualified_finales:'',
      first_finales:'',
      qualified_finales12:'',
      first_finales12:'',
      qualified_finales14:'',
      
    },
    
  ];
  constructor(private _epreuve:EpreuveService) { }

  ngOnInit(): void {
        this._epreuve.getAllEpreuve(true).subscribe(
          (data:any)=>{
            this.tests = data;
          },
          (error)=>{
            console.log(error);
          }
        )
  }

}
