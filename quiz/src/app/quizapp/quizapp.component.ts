import { Component, OnInit } from '@angular/core';
import { QuizappserviceService } from '../quizappservice.service';


@Component({
  selector: 'app-quizapp',
  templateUrl: './quizapp.component.html',
  styleUrls: ['./quizapp.component.css']
})
export class QuizappComponent implements OnInit {
  quizData;
  quizName;
  mode = 'quiz';
  radioSelected;
  checkedRadio = []
  resultValue:any = []
  correctAnswer;
  reslut:any ;
 
  constructor(private quizappService:QuizappserviceService) { }

  ngOnInit() {
      this.quizappService.getAll().subscribe((res)=>{
        console.log(res)
        this.quizData = res
      })
     
      //this.quizName = this.quizData[0].name;
      //this.loadQuiz(this.quizData)
  }

  loadQuiz(obj){
    this.quizName = obj
  }

  onItemChange(obj){
    //this.checkedRadio.push(obj.radioSelected)
    //console.log(obj.Answer)
    this.resultValue.push(obj)
    //this.correctAnswer.push(obj.Answer)
    // this.radioSelected = obj.radioSelected
    // if(this.radioSelected === obj.Answer){
    //   this.resultValue = 'correct';
    //   console.log('correct');
    // }else{
    //  this.resultValue = 'wrong';
    //  console.log('wrong');
    // } 
  }

  submitQuiz(){
    for(var i =0;i<this.resultValue.length;i++){
      if(this.resultValue[i].radioSelected === this.resultValue[i].Answer){
        this.reslut = 'correct-----'+this.resultValue[i].Answer
      }
      else {
        this.reslut = 'wrong------'+this.resultValue[i].Answer
      }
    }

    // for(var i=0;i<this.quizData.length;i++){
    //   if(this.quizData[i].radioSelected === this.quizData[i].Answer){
    //     this.reslut = 'correct -----'+this.quizData[i].Answer
    //   }
    //   else{
    //     this.reslut = 'wrong -----'+this.quizData[i].Ques.Answer
    //   }
    // }
   
  }
  
}
