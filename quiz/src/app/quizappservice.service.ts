import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizappserviceService {

  constructor(private _http:HttpClient) { }
  
  getAll(){
   return this._http.get('http://localhost:3000/QuizApp')
  }
 
}
