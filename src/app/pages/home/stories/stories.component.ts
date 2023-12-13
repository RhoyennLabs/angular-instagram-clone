import { Component, OnInit  } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements OnInit{
  userService:UserService 
  progressBarsAndStories: { width: string,storie:{storie:stories} }[] = [];
  userStories:stories[]
  constructor(UserService:UserService){
    this.userService= UserService  
    this.userStories=this.userService.profileSelected.stories
  }
  ngOnInit() {
    // Inicializar las barras de progreso (puedes ajustar la cantidad según tus necesidades)
    this.initializeProgressBars(this.userService.profileSelected.stories.length);
    console.log("barras de progreso:",this.progressBarsAndStories)
  }

  initializeProgressBars(count: number) {
    for (let index = 0; index < this.userService.profileSelected.stories.length; index++) {
      this.progressBarsAndStories= Array.from({ length: count }, () => ({ width: '0%',storie:this.userService.profileSelected.stories[index]}));
  
    }

    this.startProgress();
  }

  startProgress() {
    // Cambiar la anchura de las barras de progreso gradualmente
    this.progressBarsAndStories.forEach((progress, index) => {
      setTimeout(() => {
        progress.width = '100%';
      }, (index + 1) *   3000); // Ajusta el intervalo de tiempo según tus preferencias
    });
  }
}
