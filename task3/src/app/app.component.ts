import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task3';
  CurrentTime;
  counttimer;
    
  constructor(){
    
  }
  ngOnInit(){
    setInterval(()=>{
     this.timer()
     this.countTimer()
    },500)
   
  }
  timer(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM'
    h = h % 12
    h = h ? h :12
    var mm = m < 10 ? '0'+m : m;
    var ss = s < 10 ? '0'+s : s
//this.CurrentTime = new Date().getHours()+":"+new Date().getSeconds()+":"+new Date().getSeconds()+ (new Date().getHours()>=12?'PM':'AM')
this.CurrentTime = h+":"+mm+":"+ss+" "+ampm
// console.log(this.CurrentTime)

  }

  countTimer(){
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    var countDown = new Date('Aug 20, 2019 00:00:00').getTime();
    var now = new Date().getTime();
    var distance = countDown - now;
    this.counttimer = Math.floor(distance / (day)) + "d:" +
                                                     Math.floor((distance % day)/(hour)) + "h:" + 
                                                     Math.floor((distance % hour)/(minute)) + "m:" + 
                                                     Math.floor((distance % minute)/(second))+"s"

  }


 
}
