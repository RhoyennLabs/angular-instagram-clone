import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
//el userservice en esta clase se usa para extraer las storias en los usuarios creados por el mismo servicio.
//el userservice posee una variable que guarda el perfil del usuario que el usuario final está viendo o quiere ver, ya sea post, storie, o feed post. 
//la variable antes mencionada se encuentra siendo usada en la función changeStorie() de esta clase
export class StoriesComponent implements OnInit {
  //cambiar storieActual por "userStories"
  storieActual: any 
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
    //TOMAR LAS STORIES DEL USUARIO PARA MOSTRARLAS
    this.storieActual=await this.storiesToShow.find((obj) => obj[nombre]);
    console.log("storie actual al abrir el modal:",this.storieActual)
    for (let index = 0; index < this.storieActual.length; index++) {
   console.log(index)
      
    }
    if(this.modalStorie != undefined){
      this.modalStorie.nativeElement.style.display = 'block';
    }
  }
  changeStorie() {
    const nombreUsuario = Object.keys(this.storieActual)[0];
    const currentIndex = this.storiesToShow.findIndex((obj) => obj[nombreUsuario]);
  //eliminar nombre. buscar automaticamente al siguiente usuario para mostrar sus historias y saltar al ultimo y mostrar sus historias igualmente.
    if (currentIndex !== -1) {
      const nextUser = this.storiesToShow[currentIndex + 1];  
      if (nextUser) {
        // Realiza acciones con el siguiente usuario si es necesario
        this.storieActual=nextUser
      } else {
        // Vuelve al primer usuario
        const primerUsuario = this.storiesToShow[0];
        this.storieActual= primerUsuario;
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