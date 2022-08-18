import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CompetitionService } from 'src/app/services/competition.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button-detail-c1-renderer',
  templateUrl: './button-detail-c1-renderer.component.html',
  styleUrls: ['./button-detail-c1-renderer.component.css']
})
export class ButtonDetailC1RendererComponent implements OnInit,ICellRendererAngularComp {

  value:any
  constructor(private _competition:CompetitionService) { }
  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }
  ngOnInit(): void {
  }
  onClickDeleteHandler(){
    Swal.fire({
      icon: 'info',
      iconColor: '#95AD8D',
      title: "Are you sure you you want to delete this club?",
      confirmButtonText: 'Delete',
      confirmButtonColor: '#95AD8D',
      showCancelButton: true,
      cancelButtonColor: '#AAC7A9'
    }).then((result)=>{
      if(result.isConfirmed){
        this._competition.deletCompetition(this.value).subscribe(
          (data)=>{
            Swal.fire('Sucess','Club deleted','success') .then(() => {
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
