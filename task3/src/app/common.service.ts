import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedUser = {} as any;
  constructor(private _http: HttpClient) { }

  get user() {
    return this.selectedUser;
  }

  set user(data){
    this.selectedUser = data;
  }

  addUserInfo(obj) {
    let headers = {
      "Content-type": "application/json"
    }
    return this._http.post('http://localhost:3000/task3User', obj, { headers: headers })
  }

  getData(obj) {
    return this._http.get('http://localhost:3000/task3User', obj)
  }

  deleteObj(obj) {
    return this._http.delete('http://localhost:3000/task3User/' + obj.id, obj)
  }
  
  UpdateUser(obj) {
    return this._http.put('http://localhost:3000/task3User/' + obj.id, obj)
  }
}
