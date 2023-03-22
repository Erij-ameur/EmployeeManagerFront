import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="http://localhost:8080/api/user";
  constructor(private httpClient : HttpClient) { }

  loginUser(user: User):Observable<User>{
    return this.httpClient.post<User>(`${this.baseUrl}/login`,user);
  }

  public registerUser(user:User):Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/register`,user);
  }
}
