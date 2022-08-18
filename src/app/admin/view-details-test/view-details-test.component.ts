import { Component, OnInit } from '@angular/core';

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
    qualified_finales:'',
    first_finales:'',
    qualified_finales12:'',
    first_finales12:'',
    qualified_finales14:'',

   };
  constructor() { }

  ngOnInit(): void {
  }

}
