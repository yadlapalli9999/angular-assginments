import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonUserService {
  selectedUser = {} as any;

  constructor(private _http:HttpClient) { }  
  

  addUserInfo(obj){
    // let headers = {
    //   "Content-type": "application/json"
    // }
    return this._http.post('http://localhost:3000/UserInfo',obj)
  }

  getList(obj){
   return this._http.get('http://localhost:3000/UserInfo',obj)
  }

  get user() {
    return this.selectedUser;
  }

  set user(data){
    this.selectedUser = data;
  }

  UpdateUser(obj) {
    return this._http.put('http://localhost:3000/UserInfo/' + obj.id,obj)
  }

  deleteObj(obj) {
    return this._http.delete('http://localhost:3000/UserInfo/' + obj.id, obj)
  }
}
