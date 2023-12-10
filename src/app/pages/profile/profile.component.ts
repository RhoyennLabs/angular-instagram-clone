import { Component } from '@angular/core';
import { UserService } from '../../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userService:UserService
constructor(UserService:UserService){
  this.userService=UserService
}
}
