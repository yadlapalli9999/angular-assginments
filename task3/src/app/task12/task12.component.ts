import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task12',
  templateUrl: './task12.component.html',
  styleUrls: ['./task12.component.css']
})
export class Task12Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imgValue = true
  show(){
   this.imgValue = true;
  }

  hide(){
    this.imgValue = false;
  }
}
