import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class AuthResponse {
  jwt: string;
  username: string;
  authorities: any
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let user = {'username': username, 'password': password};
    this.http.post<AuthResponse>(`${this.uri}`, user).subscribe(res => {
      localStorage.setItem('token', res.jwt);
      var roles = [];
      for(var i = 0; i < res.authorities.length; i++) {
        roles.push(res.authorities[i].authority);
      }
      localStorage.setItem('roles', roles.toString());
      localStorage.setItem('username', res.username);
      console.log(localStorage.getItem('roles'));
    });
  }

  user() {
    return this.http.get('http://localhost:8080/user');
  }

  admin() {
    return this.http.get('http://localhost:8080/admin', {responseType: 'text'});
  }

  register(username: string, password: string, role: string) {
    let user = {'username': username, 'password': password, 'role': role};
    return this.http.post('http://localhost:8080/register', user);
  }

}
