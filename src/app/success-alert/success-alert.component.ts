import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
  h4{
    color: green;
    padding: 20px;
    background-color: lightgreen;
    border: 2px solid green;
  }
  #success{ 
    font-size: 3rem;
   }
`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
