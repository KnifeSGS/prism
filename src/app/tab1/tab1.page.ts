import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  time = '00:00';
  isRunning = false;
  interval: any;

  startTimer() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      const parts = this.time.split(':');
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      let totalSeconds = minutes * 60 + seconds + 1;
      const newMinutes = Math.floor(totalSeconds / 60);
      const newSeconds = totalSeconds % 60;
      this.time = `${this.pad(newMinutes)}:${this.pad(newSeconds)}`;
    }, 1000);
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  private pad(num: number) {
    return ('0' + num).slice(-2);
  }

}
