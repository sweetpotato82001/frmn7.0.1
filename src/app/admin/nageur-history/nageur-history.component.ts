import { Component, OnInit } from '@angular/core';
import { NageurService } from 'src/app/services/nageur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nageur-history',
  templateUrl: './nageur-history.component.html',
  styleUrls: ['./nageur-history.component.css']
})
export class NageurHistoryComponent implements OnInit {

  p: number = 1;
  nageurs=[
    {
      id:0,
      nom:'',
      prenom:'',
      sexe:'',
      licence:'',
      depot:'',
      federation:''

    },
    
  ];
  constructor(private nageur:NageurService) { }

  ngOnInit(): void {
    this.nageur.getAllNageurs(true).subscribe(
      (data:any)=>{
        this.nageurs=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }

}
