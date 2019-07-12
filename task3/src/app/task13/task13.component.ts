import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task13',
  templateUrl: './task13.component.html',
  styleUrls: ['./task13.component.css']
})
export class Task13Component implements OnInit {

  constructor() { }
  updateImage;

  ngOnInit() {
  }
  imagList = ['../../assets/image-2.jpg','../../assets/image-3.jpg','../../assets/image-4.jpg','../../assets/image-5.jpg']


  selectedImage(obj){
   this.updateImage = obj
  }
}
