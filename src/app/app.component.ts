import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'micewatch - Cronometro para teste de resistência';
  time01
  time02
  tab = '01';

  constructor() { }

  ngOnInit() {
    this.tab = '01';
    this.time01 = '00:00:00 \'000';
    this.time02 = '00:00:00 \'000';
  }
}
