import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {
  
  option='';
  ngOnInit() {
    
  }
  onClick(){
    alert(this.option);
  }

}
