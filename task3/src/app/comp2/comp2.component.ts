import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  updateObj;
  listData:any
  color;
  searchText;
 
  pager: any = {};
  pagedItems: any[];
  constructor(private common: CommonService, private router: Router,private pagerService: PagerService) {}

  ngOnInit() {
    this.displayTable()

  }

  displayTable() {
    this.common.getData(this.listData).subscribe((res) => {
      console.log(res)
      this.listData = res;
      this.setPage(1);
    })
  }

  first() {
    this.pagedItems.shift()
  }

  last() {
    this.pagedItems.pop()
  }

  second() {
    this.pagedItems.splice(2, 1)
  }

  even() {
    for (var i = 0; i < this.pagedItems.length; i++) {
      if (i % 2 === 1) {
        //this.listData.splice(i,1)
        delete this.pagedItems[i]
      }
    }
  }

  odd() {
    for (var i = 0; i < this.listData.length; i++) {
      if (i % 2 === 0) {
        //this.listData.splice(i,1)
        delete this.pagedItems[i]
      }
    }
  }

  getColor() {
    for (var i = 0; i < this.listData.length; i++) {
      if (i % 2 === 1) {
        this.listData[i].color = 'red'
      }
      else if (i % 2 === 0) {
        this.listData[i].color = 'green'
      }
    }
  }

  edits(obj) {
    console.log(obj)
    //this.updateObj = obj;
    this.common.user = obj;
    this.router.navigateByUrl('/user')
  }

  deletes(obj) {
    this.common.deleteObj(obj).subscribe((res) => {
      console.log(res)
      this.displayTable()
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.listData.length, page);

    // get current page of items
    this.pagedItems = this.listData.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}
