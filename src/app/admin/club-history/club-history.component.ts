import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-club-history',
  templateUrl: './club-history.component.html',
  styleUrls: ['./club-history.component.css']
})
export class ClubHistoryComponent implements OnInit {

  p: number = 1;
  clubs=[
    {
      id:0,
      name:'',
      summer_club:false,
      sportive:false,
      synchro:false,
      water_polo:false,
      plongeon:false,
      eau_libre:false,
    },
    
  ];
  constructor(private club:ClubService) { }
  ngOnInit(): void {
    this.club.clubs(true).subscribe(
      (data:any)=>{
        this.clubs=data;
        console.log(this.clubs);
        console.log("id:");
        console.log(data.id);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }
}
