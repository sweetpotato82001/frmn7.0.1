import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
@Component({
  selector: 'app-button-detail-participant-renderer',
  templateUrl: './button-detail-participant-renderer.component.html',
  styleUrls: ['./button-detail-participant-renderer.component.css']
})
export class ButtonDetailParticipantRendererComponent implements OnInit {
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
