import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private ls: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.ls.login(this.username, this.password);
    setTimeout(() => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
    }, 1000);
  }

}
