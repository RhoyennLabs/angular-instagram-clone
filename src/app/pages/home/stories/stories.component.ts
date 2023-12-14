import { Component, OnInit  } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements OnInit{
  storieActual:string=''
  storiesToShow:stories[]
  storiesVistas:any[]=[]
  userService:UserService 
  constructor(UserService:UserService){ 
    this.userService= UserService  
    this.storiesToShow=this.userService.profileSelected.stories
  }
  ngOnInit() {
    
  }

//incluir algoritmo que tome la primera historia que no se ha visto

  startProgress() {
    //esta variable se asigna despues de encontrtar la imagen a mostrar
    this.storieActual=this.storiesToShow[0].picture
    // Cambiar la anchura de las barras de progreso gradualmente
    let seenStorie=this.storiesToShow.find(Element=>{
       return Element.picture == this.storieActual
    })

    if (seenStorie !== undefined) {
      console.log("obviamente no es undefined")
      seenStorie.progress = '0%';
      setTimeout(() => 
      {
        if (seenStorie !== undefined) {
          seenStorie.progress = '100%';
        }
      }, 3000);
    }else{
      console.log("else")
    }
  
    this.storiesVistas.push(seenStorie)

  }
  }
