import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EpreuveService } from 'src/app/services/epreuve.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tets-details',
  templateUrl: './edit-tets-details.component.html',
  styleUrls: ['./edit-tets-details.component.css']
})
export class EditTetsDetailsComponent implements OnInit {

  public test={
    no:'',
    nage:'',
    date:'',
    classement:'',
    nb:'',
    finale:'',
    qualified_finales:'',
    first_finales:'',
    qualified_finales12:'',
    first_finales12:'',
    qualified_finales14:'',


   };
   date = new Date();
  clear1(){
    this.test.no='';
    this.test.nage='';
    this.test.date='';
    this.test.classement='';
    this.test.nb='';
  }
  clear2(){
    this.test.qualified_finales='';
    this.test.first_finales='';
    this.test.qualified_finales12='';
    this.test.first_finales12='';
    this.test.qualified_finales14='';
  }
  id:any
  constructor(private _epreuve:EpreuveService,private _snack:MatSnackBar, private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
      
      
    let id = parseInt(this._route.snapshot.paramMap.get('id') || '{}');
    this.id =id
    this._epreuve.getEpreuveById(id).subscribe(
      (data:any)=>{
        this.test=data;
        this.date = new Date(this.test.date);
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }
  
  onSubmit(){
    this._epreuve.updateEpreuve(this.test).subscribe(
      (data:any)=>{
        Swal.fire("Success !!", 'Club was updated successfully','success').then(() =>{
          this._router.navigate(['/admin/editTest']);
        });
        
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
      }
    )
  }

}
