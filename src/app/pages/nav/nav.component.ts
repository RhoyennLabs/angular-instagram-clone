import { Component } from '@angular/core';
import { UserService } from '../../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})


export class NavComponent {
  userService:UserService
  constructor(UserService:UserService,private router: Router ) {
    // Puedes realizar alguna lógica adicional en el constructor si es necesario
    this.userService=UserService
  }

  goToHome(): void {
    // Navegar al path "/home"
    this.router.navigate(['/home']);
  }

  goToReels(): void {
    // Puedes redirigir o realizar alguna acción específica para "Reels"
    // Por ejemplo, podrías redirigir usando window.location.href
    this.router.navigate(['/reels']);
  }

  goToNavigate(): void {
    // Puedes redirigir o realizar alguna acción específica para "Navigate"
    // Por ejemplo, podrías redirigir usando window.location.href
    this.router.navigate(['/navigate']);
  }

}