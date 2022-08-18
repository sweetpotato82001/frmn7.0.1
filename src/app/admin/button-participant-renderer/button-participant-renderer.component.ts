import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-button-participant-renderer',
  templateUrl: './button-participant-renderer.component.html',
  styleUrls: ['./button-participant-renderer.component.css']
})
export class ButtonParticipantRendererComponent implements OnInit {
  value :any;
 
 
  ngOnInit(): void {
     
   }
 
   constructor(){}
 
   agInit(params: ICellRendererParams<any, any>): void {
     this.value = params.value;
   }
   refresh(params: ICellRendererParams<any, any>): boolean {
     return false;
   }
}
