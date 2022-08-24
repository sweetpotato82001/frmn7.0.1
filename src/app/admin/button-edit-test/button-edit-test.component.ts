import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { EpreuveService } from 'src/app/services/epreuve.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-button-edit-test',
  templateUrl: './button-edit-test.component.html',
  styleUrls: ['./button-edit-test.component.css']
})
export class ButtonEditTestComponent implements OnInit,ICellRendererAngularComp {

  value :any;
 
 
  ngOnInit(): void {
     
   }
 
   constructor(private _epreuve:EpreuveService){}
 
   agInit(params: ICellRendererParams<any, any>): void {
     this.value = params.value;
   }
   refresh(params: ICellRendererParams<any, any>): boolean {
     return false;
   }

   deleteEpreuve(){
    Swal.fire({
      icon: 'info',
      iconColor: '#95AD8D',
      title: "Are you sure you you want to delete this test?",
      confirmButtonText: 'Delete',
      confirmButtonColor: '#95AD8D',
      showCancelButton: true,
      cancelButtonColor: '#AAC7A9'
    }).then((result)=>{
      if(result.isConfirmed){
        this._epreuve.deleteEpreuve(this.value).subscribe(
          (data)=>{
            Swal.fire('Sucess','test deleted','success') .then(() => {
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
