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
  private storieTimeout: any;
  userStories: { [user: string]: stories[] }[] = [];
  storiesDelUsuarioEscogido: stories[] = [];
  storieProgress = '';
  storiesVistas: stories[] = [];
  loading = false;
  @ViewChild('modalStorie') modalStorie?: ElementRef;

  constructor(public userService: UserService) {
    this.storieViendose = null;
    this.loading = true;
    this.loadUserStories();
  }

  ngOnInit() {}

  openStoriesModal(nombre: string) {
    this.storiesDelUsuarioEscogido = this.userStories.find((obj) => obj[nombre])?.[nombre] || [];
    this.storieViendose = this.storiesDelUsuarioEscogido[0];

    if (this.modalStorie) {
      this.modalStorie.nativeElement.style.display = 'block';
    }
    this.playUserStories();
  }

  async changeStorie() {
    if (!this.storiesDelUsuarioEscogido) {
      console.log('No hay historias para el usuario actual');
      return;
    }

    const currentIndex = this.storiesDelUsuarioEscogido.findIndex((storie) => storie.id === this.storieViendose?.id);

    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % this.storiesDelUsuarioEscogido.length;
      this.cancelStorie();
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
      this.storieViendose.seen = false;
      this.storieViendose.progress = '0%';
      this.storieTimeout = setTimeout(() => {
        if (this.storieViendose) {
          this.storieViendose.progress = '100%';
          this.storieViendose.seen = true;
          this.changeStorie();
        }
      }, 3000);
    }
  }

  cancelStorie() {
    clearTimeout(this.storieTimeout);
  }
}