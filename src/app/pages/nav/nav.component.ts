import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  usuarios: any[] = [];
  textoBusqueda: string = '';
  usuariosDeLaBusqueda: string = 'no hay usuarios que coincidan con la busqueda';
  constructor(private router: Router) {
    // Puedes realizar alguna lógica adicional en el constructor si es necesario
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
  filtrarUsuarios():any {
    console.log(this.textoBusqueda)
  
    let usuariosEncontrados:any= this.usuarios.filter(usuario =>

      usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
    if (usuariosEncontrados != ''){
      this.usuariosDeLaBusqueda= "no hay usuarios que coincidan con la busqueda"
    }else{
      this.usuariosDeLaBusqueda=usuariosEncontrados
    }
  }
}