import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EpreuveService } from 'src/app/services/epreuve.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {


  constructor(private _epreuve:EpreuveService,private _router:Router) { }
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
  ngOnInit(): void {
  }

  onSubmit(){
      this._epreuve.addEpreuve(this.test).subscribe(
        (data:any)=>{
          Swal.fire("Success !!", 'Epreuve is added successfully','success').then(()=>{
            this._router.navigate(['/admin/viewTest']);
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error !!', 'Something went wrong try later !!', 'error');
        }
      );
    }); 
  } 

}
