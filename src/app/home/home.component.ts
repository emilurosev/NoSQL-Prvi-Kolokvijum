import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ls: LoginService) { }

  token: string;
  roles = [];

  ngOnInit() {
    this.token = localStorage.getItem('token');
    if(localStorage.getItem('roles') != null) {
      this.roles = localStorage.getItem('roles').split(',');
    }
  }

  user() {
    this.ls.user().subscribe(res => {
      console.log(res);
    });
  }

  admin() {
    this.ls.admin().subscribe(res => {
      console.log(res);
    });
  }

  change(event:any) {
    console.log(event.target.value);
  }

}
