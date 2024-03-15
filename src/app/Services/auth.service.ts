import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Interfaces/iuser';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signin(user:Iuser):Observable<Iuser|boolean>{
    return this.http.get<Iuser[]>(`${environment.baseurl}/users?email=${user.email}&password=${user.password}`).pipe(map((data)=>(data.length?data[0]:false)))
  }

  signup(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`${environment.baseurl}/users`,user);

  }

  getUser():Iuser|null{
    let user =localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }else{
      return null;
    }
  }
}
