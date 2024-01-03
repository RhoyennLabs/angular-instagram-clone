import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  storieViendose:stories | null
  userStories: { [user: string]: stories[] }[] = [];
  storiesDelUsuarioEscogido: any;
  storieProgress: string;
  storiesVistas: stories[] = [];
  loading: boolean;
  @ViewChild('modalStorie') modalStorie?: ElementRef;

  constructor(public userService: UserService) {
    this.storieViendose=null
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
    this.storieViendose=this.storiesDelUsuarioEscogido[0]
    console.log("storie actual al abrir el modal:", this.storiesDelUsuarioEscogido);

    if (this.modalStorie) {
      this.modalStorie.nativeElement.style.display = 'block';
    }
  }

  changeStorie(option:String) {
    if(option == "next"){
      if (!this.storiesDelUsuarioEscogido) {
        console.log('No hay historias para el usuario actual');
        return;
      }
    
      const currentIndex = this.storiesDelUsuarioEscogido.findIndex((storie:stories) => storie.id === this.storieViendose?.id);
      console.log("indice antes de ejecutar changeusername:",currentIndex)
      if (currentIndex !== -1) {
        const nextIndex = currentIndex + 1;
    //se hace esta verificacion para  no pasarse de storie
    console.log("indice a recorrer:", nextIndex)
    //aqui ta el queso
        if (nextIndex <= this.storiesDelUsuarioEscogido.length  ) {
      //aqui fin del queso
          console.log("next index es menor o igual a storiesDelUsuarioEscogido.length")
          console.log("largo stories del usuario=",this.storiesDelUsuarioEscogido.length)
          console.log("indice despues de ejecutar changeusername", nextIndex)
          this.storieViendose = this.storiesDelUsuarioEscogido[nextIndex];
          console.log("storieViendose despues de ejecutar changeusername", this.storieViendose)
        } else {
          console.log("next index es mayor a storiesDelUsuarioEscogido.length")
          this.storieViendose = this.storiesDelUsuarioEscogido[0];
        }
      } else {
        console.log('Storie actual no encontrada en el array de historias del usuario');
      }
    }else if(option == "previous"){

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
  playUserStories(){

  }
}