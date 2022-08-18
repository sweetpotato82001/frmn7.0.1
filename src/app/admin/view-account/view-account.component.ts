import { Component, OnInit, ViewChild } from '@angular/core';
import{AccountsService } from '../../services/accounts.service';
import {MatPaginator} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})

export class ViewAccountComponent implements OnInit {

  p: number = 1;
  accounts=[
    {
      id: 0,
      email:'',
      enabled:true,
      firstName: '',
      lastName:'',
      password: '',
      username: ''
    },
    
  ];
  currentUser=
    {
      id: 0,
      email:'',
      enabled:true,
      firstName: '',
      lastName:'',
      password: '',
      username: ''
    };
  
  constructor(private _user:UserService, private _login:LoginService) { }

  ngOnInit(): void {
    this.currentUser = this._login.getUser();
    console.log(this.currentUser.id);
    this._user.getAllusers().subscribe(
      (data:any)=>{
        this.accounts=data;
       this.accounts.forEach(
        (account,index)=>{
          if(account.username === this.currentUser.username)
              {
                this.accounts.splice(index, 1);
              }
        }
       );
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Something went wrong. Please try later.",'error');
      }
    )
  }
}
