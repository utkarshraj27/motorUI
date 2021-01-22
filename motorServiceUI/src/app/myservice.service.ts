import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public addUser(adduser: Users) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8885/user/addUser", adduser,  { headers, responseType: 'text'});
  } 

  userlogin(login:Users){
    console.log("ins service login");
    console.log(login);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8885/user/Loginuser", login,  { headers, responseType: 'text'});
  }

  constructor(private httpService: HttpClient) { }
}

export class Users {
  userName: string;
  userEmail:string;
  userPassword: string;
  userMobileno: number;
  userAddress:string;
}
