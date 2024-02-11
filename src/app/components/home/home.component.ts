import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  val ="Test text"

  ngOnInit(): void {

  }

  sum(){
    //
    //
    //
    return 100
  }
  sumVar(a:number,b:number){
    //
    //
    //
    return a+b
  }

  totalSub(a:number, b: number){
    return a - b;
  }

}
