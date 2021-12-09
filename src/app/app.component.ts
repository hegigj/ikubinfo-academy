import { Component } from '@angular/core';

enum ButtonLabel {
  REMOVE = 'Remove component',
  RESTORE = 'Restore component',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-academy';
  btnLabel = ButtonLabel.REMOVE;

  lifeCycleHooksComponentInput = 1;

  isShowed(): boolean {
    return this.btnLabel === ButtonLabel.REMOVE;
  }

  toggle(): void {
    switch (this.btnLabel) {
      case ButtonLabel.REMOVE:
        this.btnLabel = ButtonLabel.RESTORE;
        break;
      case ButtonLabel.RESTORE:
        this.btnLabel = ButtonLabel.REMOVE;
        break;
    }
  }

  generateRandomNumber(): void {
    this.lifeCycleHooksComponentInput = Math.floor(Math.random() * 100);
  }
}
