import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-home',
  template: `
    <h2>home</h2>
    <isi-greetings></isi-greetings>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
