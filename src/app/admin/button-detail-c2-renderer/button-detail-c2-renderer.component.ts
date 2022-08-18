import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-detail-c2-renderer',
  templateUrl: './button-detail-c2-renderer.component.html',
  styleUrls: ['./button-detail-c2-renderer.component.css']
})
export class ButtonDetailC2RendererComponent implements OnInit,ICellRendererAngularComp {

  value:any
  constructor() { }
  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }
  ngOnInit(): void {
  }
}
