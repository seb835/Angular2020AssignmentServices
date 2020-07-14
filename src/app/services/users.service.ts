import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  // This event is not necessary for services; just a proof of concept for inter-component communication
  userUpdated = new EventEmitter<string>();

  constructor(private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.counterService.onChange(this.activeUsers[id], 'inactive');
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.counterService.onChange(this.inactiveUsers[id], 'active');
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
