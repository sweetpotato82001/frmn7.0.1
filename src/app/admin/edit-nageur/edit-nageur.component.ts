import { Component, OnInit } from '@angular/core';
import{NageurService } from '../../services/nageur.service';
import Swal from 'sweetalert2';
import { ButtonEdit1RendererComponent } from '../button-edit1-renderer/button-edit1-renderer.component';
import { GetContextMenuItemsParams, MenuItemDef, RowClassRules } from 'ag-grid-community';
import { MenuModule } from '@ag-grid-enterprise/menu';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-edit-nageur',
  templateUrl: './edit-nageur.component.html',
  styleUrls: ['./edit-nageur.component.css']
})
export class EditNageurComponent implements OnInit {


  currentYear = new Date().getFullYear();

  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true},
    {headerName:"Club",field:"club", sortable:true,filter:true},
    {headerName:"First name",field:"nom" , sortable:true,filter:true},
    {headerName:"Last Name",field:"prenom", sortable:true,filter:true},
    {headerName:"Sexe",field:"sexe", sortable:true,filter:true},
    {headerName:"Licence",field:"licence", sortable:true,filter:true},
    {headerName:"Deposite",field:"depot", sortable:true,filter:true},
    {headerName:"Federation",field:"federation", sortable:true,filter:true},
    {headerName:"licensié",field:"obliteration",
     cellRenderer: (params: { value: any; }) => params.value.slice(-4) == this.currentYear  ? `<img style="height: 20px; width: 30px" src='../../assets/blue-check-mark.png'/>`: "" , sortable:true,filter:true,maxWidth: 100},
    {headerName:"Action",field:"id",cellRenderer:ButtonEdit1RendererComponent, maxWidth: 180},
  ];
  frameworkComponents = {
    btnCellRenderer: ButtonEdit1RendererComponent
  };


  date = formatDate(new Date(), 'MM-dd-yyyy', 'en');
 
  nageurs=[
    {
      id:0,
      nom:'',
      prenom:'',
      sexe:'',
      licence:'',
      depot:'',
      federation:'',
      obliteration:'',
    },
    
  ];
  constructor(private nageur:NageurService) { }
  gridModules = [MenuModule];
  ngOnInit(): void {
    this.nageur.getAllNageurs(false).subscribe(
      (data:any)=>{
        this.nageurs=data;
        console.log(this.nageurs);
        console.log("id:");
        console.log(data.id);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    );
  }


 

}


