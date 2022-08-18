import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ClubService } from 'src/app/services/club.service';
import { NageurService } from 'src/app/services/nageur.service';
import Swal from 'sweetalert2';
import * as  countriesData from '../../services/countries.json'

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})
export class TransfertComponent implements OnInit {

  constructor(private _snack:MatSnackBar, private _route:ActivatedRoute, private _nageur:NageurService, private _club:ClubService,private datepipe: DatePipe) {
    this.club =[]
   }
  countries: any = (countriesData as any).default;
  id:any
  currentClub='';
  date = new Date();
  formatedDate = this.datepipe.transform(this.date, 'MM-dd-yyyy');
  public nageur={
    id: 0,
    nom:'',
    prenom:'',
    sexe:'',
    dateNaissance:'',
    code:'',
    email:'',
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
   public club: any[];
  ngOnInit(): void {
    this._club.clubs(false).subscribe(
      (data:any)=>{
        this.club = data;
      },
      (error)=>{
        console.log(error);
      }
    )
    let id = parseInt(this._route.snapshot.paramMap.get('id') || '{}');
    this.id =id;
    this._nageur.getNageurById(id).subscribe(
      (data:any)=>{
        this.nageur=data;
        this.nageur.obliteration = this.formatedDate!.toString();
        this.currentClub = this.nageur.club;
        console.log(this.nageur.obliteration);
        console.log(this.formatedDate);
        this.nageur.type_licence2 = "transfert";
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }

  clear1(){
    this.nageur.nom='';
    this.nageur.prenom='';
    this.nageur.sexe='';
    this.nageur.lieu_naissance='';
    this.nageur.responsable='';
    this.nageur.adresse='';
    this.nageur.supplement_adresse='';
    this.nageur.zip='';
    this.nageur.local='';
    this.nageur.telephone='';
    this.nageur.fax='';



  }
  clear2(){
   
    this.nageur.sportive=false;
    this.nageur.synchro=false;
    this.nageur.water_polo=false;
    this.nageur.plongeon=false;
    this.nageur.eau_libre=false;
    this.nageur.dirigeant=false;
    this.nageur.maitre=false;
     
  
  }
  clear22(){
    this.nageur.synchro=false;
    this.nageur.water_polo=false;
    this.nageur.plongeon=false;
    this.nageur.eau_libre=false;
  }
  clear23(){
    this.nageur.sportive=false;
    this.nageur.water_polo=false;
    this.nageur.plongeon=false;
    this.nageur.eau_libre=false;
  }
  clear24(){
    this.nageur.sportive=false;
    this.nageur.synchro=false;
    this.nageur.plongeon=false;
    this.nageur.eau_libre=false;
  }
  clear25(){
    this.nageur.sportive=false;
    this.nageur.synchro=false;
    this.nageur.water_polo=false;
    this.nageur.eau_libre=false;
  }
  clear26(){
    this.nageur.sportive=false;
    this.nageur.synchro=false;
    this.nageur.water_polo=false;
    this.nageur.plongeon=false;
  }
  clear27(){
    this.nageur.maitre=false;
  }
  clear28(){
  this.nageur.dirigeant=false;
  }
  clear3(){
   this.nageur.federation='';
   this.nageur.club='';
   
   
  }

  formSubmit(){
    if(this.currentClub == this.nageur.club){
      this._snack.open("Choose another club" , '', {
        duration: 3000
      });
      return;
     }

    this._nageur.deletNageur(this.nageur.id).subscribe(
      (data:any)=>{
        this._nageur.transfertNageur(this.nageur).subscribe(
          (data:any)=>{
            Swal.fire("Success !!", 'nageur was transfered','success').then(()=>{
              window.location.reload();
          });
          },
          (error)=>{
            console.log(error);
            Swal.fire('Error !!', 'Something went wrong please try again', 'error');
          });
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong please try again', 'error');
      }
    ) 
    
    
  }
}
