import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  totalElapsedMs = 0;
  elapsedMs = 0;
  startTime;
  timerPromise;
  timesTurn = [];
  @Output() headerTab = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

    getTurns = function() {
      return this.timesTurn;
    }
    
    start = function() {
      if (!this.timerPromise) {
        this.startTime = new Date();
        this.timerPromise = setInterval(() => {
          var now = new Date();
          this.elapsedMs = now.getTime() - this.startTime.getTime();
          this.headerTab.emit(this.getElapsedMsFormated());
        }, 31);
      }
    };

    clearAll = function() {
      this.stop();
      this.reset();
      this.timesTurn = [];
    };
    
    stop = function() {
      if (this.timerPromise) {
        clearInterval(this.timerPromise);
        this.timerPromise = undefined;
        this.totalElapsedMs += this.elapsedMs;
        this.elapsedMs = 0;
      }
    };
    
    reset = function() {
      this.startTime = new Date();
      this.totalElapsedMs = this.elapsedMs = 0;
      this.headerTab.emit(this.getElapsedMsFormated());
    };
    
    turn = function() {
      this.timesTurn.push(this.getElapsedMsFormated());
      this.reset();
    };
    
    getTime = function() {
      return this.time;
    };
    
    getElapsedMs = function() {
      return this.totalElapsedMs + this.elapsedMs;
    };
    
    getElapsedMsFormated = function() {

      var milliseconds = this.totalElapsedMs + this.elapsedMs;
      
      var hours = Math.floor(milliseconds / 3600000);
      var minutes = Math.floor((milliseconds - (hours * 3600000)) / 60000);
      var seconds = Math.floor((milliseconds - (hours * 3600000) - (minutes * 60000)) / 1000);
      var milisec = Math.floor((milliseconds - (hours * 3600000) - (minutes * 60000) - seconds * 1000));

      milisec = this.completeWithZeros(milisec+"", 3);
      seconds = this.completeWithZeros(seconds+"", 2);
      minutes = this.completeWithZeros(minutes+"", 2);
      hours = this.completeWithZeros(hours+"", 2);

      return hours + ":" + minutes + ":" + seconds + " '" + milisec;
  };

  

  completeWithZeros = function(numberToZero:string, size:number) {
    let timeWithZero = numberToZero;
    while (timeWithZero.length < size) timeWithZero = "0" + timeWithZero;
    return timeWithZero;
  };

}
