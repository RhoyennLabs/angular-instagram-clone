import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html', // Asegúrate de proporcionar la ruta correcta
  styleUrls: ['./stories.component.scss'] // Asegúrate de proporcionar la ruta correcta
})
export class StoriesComponent implements OnInit {
  storieViendose: stories | null;
  userStories: { [user: string]: stories[] }[] = [];
  storiesDelUsuarioEscogido: stories[] = [];
  storieProgress = '';
  storiesVistas: stories[] = [];
  loading = false;
  @ViewChild('modalStorie') modalStorie?: ElementRef;

  constructor(public userService: UserService) {
    this.storieViendose = null;
    this.loading = true;
    this.storieProgress = '';
    this.loadUserStories();
  }

  ngOnInit() {}

  openStoriesModal(nombre: string) {
    this.storiesDelUsuarioEscogido = this.userStories.find((obj) => obj[nombre])?.[nombre] || [];
    this.storieViendose = this.storiesDelUsuarioEscogido[0];
    console.log("storie actual al abrir el modal:", this.storiesDelUsuarioEscogido);

    if (this.modalStorie) {
      this.modalStorie.nativeElement.style.display = 'block';
    }
    this.playUserStories();
  }

  changeStorie() {
    if (!this.storiesDelUsuarioEscogido) {
      console.log('No hay historias para el usuario actual');
      return;
    }

    const currentIndex = this.storiesDelUsuarioEscogido.findIndex((storie) => storie.id === this.storieViendose?.id);
    console.log("indice antes de ejecutar changeusername:", currentIndex);

    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % this.storiesDelUsuarioEscogido.length;

      console.log("indice a recorrer:", nextIndex);

      this.storieViendose = this.storiesDelUsuarioEscogido[nextIndex];
      this.playUserStories();
    } else {
      console.log('Storie actual no encontrada en el array de historias del usuario');
    }
  }

  closeStoriesModal() {
    if (this.modalStorie) {
      this.modalStorie.nativeElement.style.display = 'none';
    }
  }

  private loadUserStories() {
    this.userStories = this.userService.usuarios.map((user) => ({ [user.nombre]: user.stories }));
  }

  playUserStories() {
    if (this.storieViendose) {
      this.storieViendose.progress = '0%';

      setTimeout(() => {
        if (this.storieViendose) {
          this.storieViendose.progress = '100%';
          this.storieViendose.seen = true;
          this.changeStorie();
        }

      }, 3000);

    
    }
  }
}