import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { NageurService } from 'src/app/services/nageur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button-edit1-renderer',
  templateUrl: './button-edit1-renderer.component.html',
  styleUrls: ['./button-edit1-renderer.component.css']
})
export class ButtonEdit1RendererComponent implements OnInit,ICellRendererAngularComp{

   date = new Date();
   currentYear = this.date.getFullYear();
   formatedDate = this.datepipe.transform(this.date, 'MM-dd-yyyy');
   value :any;
   public nageur={
    id: 0,
    nom:'',
    prenom:'',
    sexe:'',
    dateNaissance:'',
    code:'',
    email:'',
    licence:'',
    civilite:'',
    nationalite:'',
    summer_nageur:false,
    sportive:false,
    synchro:false,
    water_polo:false,
    plongeon:false,
    eau_libre:false,
    adresse:'',
    supplement_adresse:'',
    zip:'',
    local:'',
    telephone:'',
    fax:'',
    lieu_naissance:'',
    responsable:'',
    federation:'',
    club:'',
    depot:'',
    type_licence1:'',
    type_licence2:'',
    type_licence3:'',
    obliteration:'',
    maitre:false,
    dirigeant:false,
   };
    nageurId = {
      id: 0
    }  
  lastNageurRecord ={
    id: 0,
    nom:'',
    prenom:'',
    sexe:'',
    dateNaissance:'',
    code:'',
    email:'',
    civilite:'',
    licence:'',
    nationalite:'',
    summer_nageur:false,
    sportive:false,
    synchro:false,
    water_polo:false,
    plongeon:false,
    eau_libre:false,
    adresse:'',
    supplement_adresse:'',
    zip:'',
    local:'',
    telephone:'',
    fax:'',
    lieu_naissance:'',
    responsable:'',
    federation:'',
    club:'',
    depot:'',
    type_licence1:'',
    type_licence2:'',
    type_licence3:'',
    obliteration:'',
    maitre:false,
    dirigeant:false,
  }
  ngOnInit(): void {  
        this._nageur.getNageurById(this.value).subscribe(
          (data:any)=>{
            this.nageur = data;
          }
        )
        this._nageur.getOrderedNageur().subscribe(
          (data:any)=>{
            this.nageurId = data
            console.log(this.nageurId);
          },
          (error)=>{
      
          }
         )
    }

  constructor(private _router: Router,private _nageur:NageurService, private datepipe: DatePipe,private snack:MatSnackBar){}

  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  


   // delete user
   onClickDeleteHandler(){
    Swal.fire({
      icon: 'info',
      iconColor: '#95AD8D',
      title: "Are you sure you you want to delete this competitor?",
      confirmButtonText: 'Delete',
      confirmButtonColor: '#95AD8D',
      showCancelButton: true,
      cancelButtonColor: '#AAC7A9'
    }).then((result)=>{
      if(result.isConfirmed){
        this._nageur.deletNageur(this.value).subscribe(
          (data)=>{
            Swal.fire('Sucess','Competitor deleted','success').then(() => {
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

  //renew 
  myClickFunction(){
      
       if(parseInt(this.nageur.obliteration.slice(-4)) == this.currentYear){
        this.snack.open("Nageur déjà licensié" , '', {
          duration: 3000
        });
        return;
       }

        let latest_date = this.datepipe.transform(this.date, 'MM-dd-yyyy');
        this.nageur.obliteration = latest_date!.toString();
        this.nageur.id = this.nageurId.id
       
        this._nageur.transfertNageur(this.nageur).subscribe(
          (data:any)=>{
            Swal.fire("Success !!", 'nageur was renewed','success').then(()=>{
              window.location.reload();
          });
          },
          (error)=>{
            console.log(error);
            Swal.fire('Error !!', 'Something went wrong please try again', 'error');
          });
        
  }

  transferHandler(){
     this._nageur.getNageurByLicense(this.nageur.licence).subscribe(
      (data:any)=>{
        this.lastNageurRecord = data;
        if(parseInt(this.lastNageurRecord.obliteration.slice(-4)) == this.currentYear){
          this.snack.open("Nageur déjà licensié. Supprimer nageur "+ this.lastNageurRecord.id +" pour pouvoir le transfert" , '', {
            duration: 3000
          });
          return;
        }
      }
     )

     this._router.navigate(['/admin/transfertForm',this.value]);

  }

}