import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CommonUserService} from '../common-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm:FormGroup;
  //user;
  user= {} as any
  constructor(private userService:CommonUserService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      fname:new FormControl('',[Validators.minLength(4)]),
      lname:new FormControl('',[Validators.minLength(5)]),
      email:new FormControl('',[Validators.required])
    });
    
    this.user = this.userService.selectedUser; 
    if(this.user.id) {
      this.myForm.setValue({
        fname: this.user.fname,
        lname:this.user.lname,
        email:this.user.email
      })
    }
  }

  adduser(){
    console.log(this.myForm.value)
    this.user = this.myForm.value;
    this.userService.addUserInfo(this.user).subscribe((res)=>{
      console.log(res)
    })
    this.clearForm()
  }

  clearForm(){
    this.myForm.reset()
  }

  updatesUser(obj){
    const userObj = this.myForm.value;
    userObj.id = this.user.id;
    this.userService.UpdateUser(userObj).subscribe((res)=>{
      console.log(res)
      this.userService.user = res;
     
    })
    this.clearForm()
  }

}
