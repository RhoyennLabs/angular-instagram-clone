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
  storiesVistas:any[]=[]
  userService:UserService 
  progressBarsAndStories: { width: string,storie:stories }[] = [];
  userStories:stories[]
  constructor(UserService:UserService){
    this.userService= UserService  
    this.userStories=this.userService.profileSelected.stories
  }
  ngOnInit() {
this.initializeProgressBars()
  }

  initializeProgressBars() {
    for (let index = 0; index < this.userService.profileSelected.stories.length; index++) {
      this.progressBarsAndStories.push({ width: '0%',storie:this.userService.profileSelected.stories[index]});
    }

  }
//PONERLE 100%S SOLO A LA HISTORIA QUE SE ESTÉ VIENDO
  startProgress(picture:string) {
    this.storieActual=picture
    // Cambiar la anchura de las barras de progreso gradualmente
    let seenStorie=this.progressBarsAndStories.find(Element=>{
        Element.storie.picture == this.storieActual
    })
    if (seenStorie !== undefined) {
      seenStorie.width = '0%';
      setTimeout(() => {
        if (seenStorie !== undefined) {
          seenStorie.width = '100%';
        }
      }, 3000);
    }
  
    this.storiesVistas.push(seenStorie)

  }
}
