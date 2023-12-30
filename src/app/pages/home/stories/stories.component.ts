import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  storieActual: any= []
  storiesToShow: { [user: string]: stories[] }[] = [];
  storiesCount: number=0
  storieProgress: string;
  storiesVistas: stories[] = [];
  loading: boolean;
  @ViewChild('modalStorie') modalStorie?: ElementRef | undefined;

  constructor(public userService: UserService) {
    this.loading = false;

    this.userService.usuarios.forEach((element) => {
      let newUser = element.nombre;
      let userToInsert: { [user: string]: stories[] } = {};
      userToInsert[newUser] = [];

      element.stories.forEach((element2) => {
        userToInsert[newUser].push(element2);
      });

      this.storiesToShow.push(userToInsert);
    });

    this.loading = true;
    this.storieProgress = '';
  }

  ngOnInit() {}


  async openStoriesModal(nombre: string) {
    this.storieActual= await this.storiesToShow.find((obj) => obj[nombre][0]);
    if(this.modalStorie != undefined){
      this.modalStorie.nativeElement.style.display = 'block';
    }
  }
  changeStorie(nombre: string) {
    const currentIndex = this.storiesToShow.findIndex((obj) => obj[nombre]);
  //eliminar nombre. buscar automaticamente al siguiente usuario para mostrar sus historias y saltar al ultimo y mostrar sus historias igualmente.
    if (currentIndex !== -1) {
      const nextUser = this.storiesToShow[currentIndex + 1]?.[nombre];
      
      if (nextUser) {
        console.log('Usuario siguiente:', nextUser);
        // Realiza acciones con el siguiente usuario si es necesario
      } else {
        // Vuelve al primer usuario
        const primerUsuario = this.storiesToShow[0];
        this.storieActual= primerUsuario;
        if (primerUsuario) {
          console.log('Volviendo al primer usuario:', primerUsuario);
          // Realiza acciones con el primer usuario si es necesario
        } else {
          console.log('No hay usuario en la lista');
        }
      }
    } else {
      console.log('Usuario no encontrado');
    }
  }
  
  closeStoriesModal() {
    if (this.modalStorie != undefined) {
      this.modalStorie.nativeElement.style.display = 'none';
    }
  }
}