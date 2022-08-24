import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ParticipantService } from 'src/app/services/participant.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-button-edit-participant-renderer',
  templateUrl: './button-edit-participant-renderer.component.html',
  styleUrls: ['./button-edit-participant-renderer.component.css']
})
export class ButtonEditParticipantRendererComponent implements OnInit {

  value :any;
 
 
  ngOnInit(): void {
     
   }
 
   constructor(private _participant:ParticipantService){}
 
   agInit(params: ICellRendererParams<any, any>): void {
     this.value = params.value;
   }
   refresh(params: ICellRendererParams<any, any>): boolean {
     return false;
   }


    // delete participant
    onClickDeleteHandler(){
      Swal.fire({
        icon: 'info',
        iconColor: '#95AD8D',
        title: "Are you sure you you want to delete this participant?",
        confirmButtonText: 'Delete',
        confirmButtonColor: '#95AD8D',
        showCancelButton: true,
        cancelButtonColor: '#AAC7A9'
      }).then((result)=>{
        if(result.isConfirmed){
          this._participant.deleteParticipant(this.value).subscribe(
            (data)=>{
              Swal.fire('Sucess','Participant deleted','success') .then(() => {
                window.location.reload();
              });
            },
            (error)=>{
              console.log(error);
              Swal.fire('Error !!', 'Something went wrong please try again', 'error');
            }
          ); 
        }
      });
    }
}
