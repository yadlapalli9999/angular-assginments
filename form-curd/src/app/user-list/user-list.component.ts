import { Component, OnInit } from '@angular/core';
import { CommonUserService } from '../common-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:CommonUserService,private router:Router) { }
  listData;
  ngOnInit() {
    this.displayTable()
  }

  displayTable(){
    this.userService.getList(this.listData).subscribe((res)=>{
      this.listData = res;
    })
  }
  edits(obj){
    console.log(obj)
    this.userService.user = obj;
    this.router.navigateByUrl('/user')
  }

  deletes(obj) {
    this.userService.deleteObj(obj).subscribe((res) => {
      console.log(res)
      this.displayTable()
    })
  }
}
