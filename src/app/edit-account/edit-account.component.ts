import { Component, OnInit } from '@angular/core';
import{AccountsService } from '../services/accounts.service';
import Swal from 'sweetalert2';
import { ButtonCellRendererComponent } from '../button-cell-renderer/button-cell-renderer.component';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
interface IUserData{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  enabeled: boolean;

}

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  columnDefs=[
    {headerName:"id",field:"id", sortable:true,filter:true,},
    {headerName:"first Name",field:"firstName" , sortable:true,filter:true},
    {headerName:"last Name",field:"lastName", sortable:true,filter:true},
    {headerName:"email",field:"email", sortable:true,filter:true},
    {headerName:"username",field:"username", sortable:true,filter:true},
    {headerName:"password",field:"password", sortable:true,filter:true},
    {headerName:"enabled",field:"enabled", sortable:true,filter:true},
    {headerName:"Action",field:"id",cellRenderer:ButtonCellRendererComponent},
  ];
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
    frameworkComponents = {
      btnCellRenderer: ButtonCellRendererComponent
    };
  constructor(private account:UserService, private login:LoginService) { }

  ngOnInit(): void {

    this.currentUser = this.login.getUser();
    this.account.getAllusers().subscribe(
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
    );
  }

}
