 import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
 })

 export class CounterComponent {
  public counter:number = 10;

  increaseBy(num:number):void{
    this.counter+=num;
  }

  reset():void{
    this.counter = 10;
  }
  constructor() { }

 }
