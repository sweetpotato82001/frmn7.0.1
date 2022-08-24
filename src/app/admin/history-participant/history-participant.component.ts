import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import Swal from 'sweetalert2';
import { ButtonDetailParticipantRendererComponent } from '../button-detail-participant-renderer/button-detail-participant-renderer.component';
@Component({
  selector: 'app-history-participant',
  templateUrl: './history-participant.component.html',
  styleUrls: ['./history-participant.component.css']
})
export class HistoryParticipantComponent implements OnInit {
  
  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Club",field:"clubName" , sortable:true,filter:true},
    {headerName:"Nageur",field:"nageur", sortable:true,filter:true},
    {headerName:"Bannière",field:"bannière", sortable:true,filter:true},
    {headerName:"Equipe",field:"equipe", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer: ButtonDetailParticipantRendererComponent},
  ];
  frameworkComponents = {
    btnCellRenderer:  ButtonDetailParticipantRendererComponent};
  participants=[
    {
      id: 0,
      clubName: '',
      nageur: '',
      equipe: 1,
      pays: false,
      club: true,
      other: false,
    },
    
  ];
  constructor(private _participant:ParticipantService) { }

  ngOnInit(): void {
        this._participant.getAllParticipant(true).subscribe(
          (data:any)=>{
            this.participants = data;
            
          },
          (error)=>{
                console.log(error);
          }
        );
  }

}
