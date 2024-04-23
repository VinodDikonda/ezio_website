import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  issellerLoggedIn=new BehaviorSubject<boolean>(false)

  constructor(private httpClient: HttpClient) { }
  userlogin(singupFrom: User){
    console.log(singupFrom)
    return this.httpClient.post(`${baseUrl}/userlogin`,singupFrom)
  }
  
  
}
