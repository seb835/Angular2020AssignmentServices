import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  activeChangesCount: number = 0;
  inactiveChangesCount: number = 0;

  onChange(id: string, action: string) {
    switch (action) {
      case 'active':
        this.activeChangesCount++;
        break;
      case 'inactive':
        this.inactiveChangesCount++;
        break;
    }

    const msg = 'Updated user "' + id + '" to ' + action +
      ' (active changes: ' + this.activeChangesCount +
      ', inactive changes: ' + this.inactiveChangesCount + ')';
    console.log(msg);
  }
}
