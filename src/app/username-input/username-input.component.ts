import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css']
})
export class UsernameInputComponent implements OnInit {
  userName = "";
  noUserName = true;

  constructor() { }

  ngOnInit() {
  }

  noUser(){
    if(this.userName !== ""){
      this.noUserName = false;
    } else{
      this.noUserName = true;
    }
  }
  reset(){
    this.userName = "";
    this.noUser();
  }

}
