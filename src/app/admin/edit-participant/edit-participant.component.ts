import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ButtonEditParticipantRendererComponent } from '../button-edit-participant-renderer/button-edit-participant-renderer.component';
@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Club",field:"club" , sortable:true,filter:true},
    {headerName:"Nageur",field:"nageur", sortable:true,filter:true},
    {headerName:"Bannière",field:"bannière", sortable:true,filter:true},
    {headerName:"Equipe",field:"equipe", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer: ButtonEditParticipantRendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer:  ButtonEditParticipantRendererComponent};
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
