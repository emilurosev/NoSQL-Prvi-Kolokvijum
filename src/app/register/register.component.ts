import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  allRoles = ["ADMIN", "USER"];
  selectedValue: string;

  constructor(private ls: LoginService) { }

  ngOnInit() {
  }

  register() {
    if(this.username && this.password && this.selectedValue) {
      this.ls.register(this.username, this.password, this.selectedValue.toLowerCase()).subscribe(res => {
        setTimeout(() => {
          console.log(res);
          this.username = '';
          this.password = '';
          this.selectedValue = '';
        }, 1000)
      });
    }
    else {
      console.log('fill all fields');
    }
  }

  eventSelection(event){
    this.selectedValue = event.value;
    console.log(this.selectedValue);
  }

}
