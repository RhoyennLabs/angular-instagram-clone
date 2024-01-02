import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  userStories: { [user: string]: stories[] }[] = [];
  storiesDelUsuarioEscogido: any;
  storieProgress: string;
  storiesVistas: stories[] = [];
  loading: boolean;
  @ViewChild('modalStorie') modalStorie?: ElementRef;

  constructor(public userService: UserService) {
    this.loading = false;
    this.loadUserStories();
    this.loading = true;
    this.storieProgress = '';
  }

  ngOnInit() {}

  async openStoriesModal(nombre: string) {
    //antes
    //this.storiesDelUsuarioEscogido = this.userStories.find((obj) => obj[nombre])
    //gpt quita trabajos:
    this.storiesDelUsuarioEscogido = this.userStories.find((obj) => obj[nombre])?.[nombre] || [];
    console.log("storie actual al abrir el modal:", this.storiesDelUsuarioEscogido);

    if (this.modalStorie) {
      this.modalStorie.nativeElement.style.display = 'block';
    }
  }

  changeStorie() {
    const currentIndex = this.userStories.indexOf(this.storiesDelUsuarioEscogido);

    // Eliminar nombre, buscar automáticamente al siguiente usuario para mostrar sus historias
    // y saltar al último y mostrar sus historias igualmente.
    if (currentIndex !== -1) {
      const nextUser = this.userStories[currentIndex + 1];
      this.storiesDelUsuarioEscogido = nextUser || this.userStories[0];
    } else {
      console.log('Usuario no encontrado');
    }
  }

  closeStoriesModal() {
    if (this.modalStorie) {
      this.modalStorie.nativeElement.style.display = 'none';
    }
  }

  private loadUserStories() {
    this.userStories = this.userService.usuarios.map((user) => ({
      [user.nombre]: user.stories}));
  }
}