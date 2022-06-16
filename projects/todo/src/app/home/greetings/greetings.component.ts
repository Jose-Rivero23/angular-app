import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent implements OnInit {
  userName!: string;
  constructor() {}

  ngOnInit(): void {
    this.userName = '';
  }
  handleClick() {
    this.userName = '';
  }
  handleChange(newUserName: string) {
    this.userName = newUserName;
  }
}
