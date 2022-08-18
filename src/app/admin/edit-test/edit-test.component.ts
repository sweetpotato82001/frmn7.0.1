import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ButtonEditTestComponent } from '../button-edit-test/button-edit-test.component';
@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  columnDefs=[
    {headerName:"No",field:"no", sortable:true,filter:true},
    {headerName:"Nage",field:"nage" , sortable:true,filter:true},
    {headerName:"Date",field:"date", sortable:true,filter:true},
    {headerName:"Classement",field:"classement", sortable:true,filter:true},
    {headerName:"Nb finales",field:"nb_finale", sortable:true,filter:true},
    {headerName:"Finale",field:"finale", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonEditTestComponent},
  ];
  frameworkComponents = {
    btnCellRenderer:ButtonEditTestComponent
  };
  tests=[
    {
      no:0,
      nage:'',
      date:'',
      classement:'',
      nb_finale:'',
      finale:'',
      
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
