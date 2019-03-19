import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {
  buttonPressed = false;
  presses = [];
  numberOfPresses = 0;

  constructor() { }


  onPress(){
    this.buttonPressed = !this.buttonPressed;
    this.numberOfPresses++;
    //this.presses.push(this.numberOfPresses);
    this.presses.push(new Date());
  }

  ngOnInit() {
  }

}
