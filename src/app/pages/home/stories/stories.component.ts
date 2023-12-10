import { Component } from '@angular/core';
import { UserService } from '../../../users.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
  userService:UserService 
  constructor(UserService:UserService){
    this.userService= UserService  
  }
  
}
