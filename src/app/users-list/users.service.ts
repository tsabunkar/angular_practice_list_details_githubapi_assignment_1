import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://api.github.com/users';

  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get(this.url);
  }


}
