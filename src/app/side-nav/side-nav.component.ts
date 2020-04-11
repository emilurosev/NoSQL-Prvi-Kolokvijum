import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  jwt: string;
  showLogoutButton: boolean;
  roles: string[] = [];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  
  ngOnInit(): void {
    this.jwt = localStorage.getItem('token');
    if(!this.jwt) {
      this.showLogoutButton = false;
    }
    else {
      this.showLogoutButton = true;
    }
    if(localStorage.getItem('roles') !== null) {
      this.roles = localStorage.getItem('roles').split(',');
    }
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

}
