import { Component, OnInit } from '@angular/core';
import { EpreuveService } from 'src/app/services/epreuve.service';
import Swal from 'sweetalert2';
import { ButtonParticipantRendererComponent } from '../button-participant-renderer/button-participant-renderer.component';
@Component({
  selector: 'app-view-tets',
  templateUrl: './view-tets.component.html',
  styleUrls: ['./view-tets.component.css']
})
export class ViewTetsComponent implements OnInit {
  columnDefs=[
    {headerName:"No",field:"no", sortable:true,filter:true},
    {headerName:"Nage",field:"nage" , sortable:true,filter:true},
    {headerName:"Date",field:"date", sortable:true,filter:true},
    {headerName:"Classement",field:"classement", sortable:true,filter:true},
    {headerName:"qualified_finales",field:"qualified_finales", sortable:true,filter:true},
    {headerName:"Finale",field:"finale", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonParticipantRendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer:ButtonParticipantRendererComponent
  };
  tests=[
    {
      no:0,
      nage:'',
      date:'',
      classement:'',
      qualified_finales:'',
      finale:'',
      
    },
    
  ];
  constructor(private _epreuve:EpreuveService) { }

  ngOnInit(): void {
        this._epreuve.getAllEpreuve(false).subscribe(
          (data:any)=>{
            this.tests = data;
          },
          (error)=>{
            console.log(error);
          }
        )
  }

}
