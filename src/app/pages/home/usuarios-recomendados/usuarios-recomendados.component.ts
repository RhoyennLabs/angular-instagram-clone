import { Component } from '@angular/core';
import { UserService } from '../../../users.service';

@Component({
  selector: 'app-usuarios-recomendados',
  templateUrl: './usuarios-recomendados.component.html',
  styleUrl: './usuarios-recomendados.component.css'
})
export class UsuariosRecomendadosComponent {
  userService:UserService
  constructor(UserService:UserService){
  this.userService=UserService
  }
}
