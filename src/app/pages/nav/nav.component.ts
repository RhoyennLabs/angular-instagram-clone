import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/userInterface';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})


export class NavComponent {
  usuarios: Usuario[] = [{id:1,nombre:"rodrigo"},{id:2,nombre:"juaco"}];
  textoBusqueda: string = '';
  usuariosDeLaBusqueda: Usuario[] = [{id:1,nombre:''}];
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
 async filtrarUsuarios(): Promise<void> {
    console.log(this.textoBusqueda);
  
    let usuariosEncontrados: any[] =await this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  
    if (usuariosEncontrados.length === 0) {
      this.usuariosDeLaBusqueda = [{id:1,nombre:"No hay usuarios que coincidan con la búsqueda."}];
    }else if(usuariosEncontrados.length > 0){
      this.usuariosDeLaBusqueda = usuariosEncontrados;
    }
  }
}