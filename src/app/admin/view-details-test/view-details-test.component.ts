import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EpreuveService } from 'src/app/services/epreuve.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-details-test',
  templateUrl: './view-details-test.component.html',
  styleUrls: ['./view-details-test.component.css']
})
export class ViewDetailsTestComponent implements OnInit {
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
   id:any
  constructor(private _epreuve:EpreuveService,private _snack:MatSnackBar, private _route:ActivatedRoute) { }

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

}
