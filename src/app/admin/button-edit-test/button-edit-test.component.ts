import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
@Component({
  selector: 'app-button-edit-test',
  templateUrl: './button-edit-test.component.html',
  styleUrls: ['./button-edit-test.component.css']
})
export class ButtonEditTestComponent implements OnInit {

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
