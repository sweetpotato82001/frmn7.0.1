import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ButtonDetailParticipantRendererComponent } from '../button-detail-participant-renderer/button-detail-participant-renderer.component';
@Component({
  selector: 'app-view-participant',
  templateUrl: './view-participant.component.html',
  styleUrls: ['./view-participant.component.css']
})
export class ViewParticipantComponent implements OnInit {
  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Club",field:"club" , sortable:true,filter:true},
    {headerName:"Nageur",field:"nageur", sortable:true,filter:true},
    {headerName:"Bannière",field:"bannière", sortable:true,filter:true},
    {headerName:"Equipe",field:"equipe", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer: ButtonDetailParticipantRendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer:  ButtonDetailParticipantRendererComponent};
  participants=[
    {
      id:0,
      club:'',
      nageur:'',
     banniere:'',
      equipe:'',
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
