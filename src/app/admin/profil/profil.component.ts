import { Component, OnInit } from '@angular/core';
import{AccountsService } from '../../services/accounts.service';
import {MatPaginator} from '@angular/material/paginator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user =  {
    "id": 3,
    "username": "sweetpotato",
    "password": "batata123",
    "firstName": "batata",
    "lastName": "hilwa",
    "email": "batata@gmail.com",
    "phone": null,
    "profile": "test.jpg",
    "enabled": true,
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "authorities": [
        {
            "authority": "NORMAL"
        }
    ],
    "accountNonLocked": true
}
  constructor(private account:AccountsService) { }
 
  ngOnInit(): void {
    this.account.accounts().subscribe(
      (data:any)=>{
        this.user=data;
        console.log(this.user);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }
}
