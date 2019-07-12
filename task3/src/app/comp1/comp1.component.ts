import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private common: CommonService) { }
  user = {} as any;
  ngOnInit() {
    this.user = this.common.selectedUser;
  }

  addUser() {
    this.common.addUserInfo(this.user).subscribe((res) => {
      console.log(res)
    })
  }
  
  updateUser(obj) {
    this.common.UpdateUser(this.user).subscribe((res) => {
      this.common.user = res;
    })
  }
}
