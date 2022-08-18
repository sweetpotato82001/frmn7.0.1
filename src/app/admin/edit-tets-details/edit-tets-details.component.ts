import { Component, OnInit } from '@angular/core';

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
    qualified_finales:'',
    first_finales:'',
    qualified_finales12:'',
    first_finales12:'',
    qualified_finales14:'',

   };
  constructor() { }
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

}
