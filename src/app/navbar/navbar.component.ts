import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
// import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null

  constructor(public login: LoginService,private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isloggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn = this.login.isloggedIn();
      this.user = this.login.getUser();
    });
  }

  public logout(){
    this.login.logout();
    this.router.navigate(['/']);
    //this.login.loginStatusSubject.next(false);
  }

}