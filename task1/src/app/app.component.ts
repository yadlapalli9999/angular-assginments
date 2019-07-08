import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  dataOfList;
  reciveData;
  constructor(private commonService:CommonService){}
  first(){
    alert("Ok")
  }

  ngOnInit(){
   this.dataOfList = this.commonService.getList()
   console.log(this.dataOfList)
  
}
selectName(obj){
  console.log(obj);
  this.reciveData = obj
  
}


}

