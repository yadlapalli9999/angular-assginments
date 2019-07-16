import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  myForm:FormGroup;

  ngOnInit(){
    this.myForm = new FormGroup({
      fname: new FormControl('',Validators.minLength(3)),
      lname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required)
    })
  }

  userSumbit(){
    console.log(this.myForm.value)
    this.clearForm()
  }

  clearForm(){
    this.myForm.reset();
  }
}
