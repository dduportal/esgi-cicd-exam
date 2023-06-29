import { Observable } from 'rxjs';

import { Component } from '@angular/core';
@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {

}
export class AppComponent {
  title = 'my-app';
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor() {
    this.title$.subscribe(this.setTitle);
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
  }

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  private onComplete() {
    return new Promise<void>(resolve => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

}
