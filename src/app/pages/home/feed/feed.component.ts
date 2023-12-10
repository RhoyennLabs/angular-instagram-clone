import { Component } from '@angular/core';
import { UserService } from '../../../users.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  userService:UserService

  constructor(UserService:UserService){
    this.userService=UserService
  }
}
