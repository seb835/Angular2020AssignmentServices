import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private usersService: UsersService) {
    // This event is not necessary for services; just a proof of concept for inter-component communication
    this.usersService.userUpdated.subscribe(
      (status: string) => console.log('New status: ' + status)
    );
  }
}
