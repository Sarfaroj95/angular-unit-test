import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  val ="home works!"
  myName="Tipu"
  constructor() { }

  ngOnInit() {
  }

  sum(){
    //
    //
    //
    return 100
  }
  sumVar(a,b){
    //
    //
    //
    return a+b
  }


}
