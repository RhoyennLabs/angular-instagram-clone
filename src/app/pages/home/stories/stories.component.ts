import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements AfterViewInit {
  storieActual:string | null
  @ViewChild('modalStorie') modalStorie?: ElementRef;
  storiesToShow:stories[] | null
  storiesVistas:any[]=[]
  userService:UserService 
  constructor(UserService:UserService){ 
 
    this.userService= UserService  
    this.storieActual=null
    this.storiesToShow=null

  }
  ngAfterViewInit () {
    console.log('Elemento modalStorie:', this.modalStorie);
  }

//incluir algoritmo que tome la primera historia que no se ha visto

   startProgress() {
    alert("workin'")
    this.storiesToShow=this.userService.profileSelected.stories
    //esta variable se asigna despues de encontrtar la imagen a mostrar
    let storiePicture= this.userService.profileSelected.stories[0].picture
    this.storieActual=this.userService.profileSelected.stories[0].picture
    let storieProgress=this.userService.profileSelected.stories[0].progress
  

    if (storiePicture !== undefined) {
      console.log("obviamente no es undefined")
      storieProgress = '0%';
      setTimeout(() => 
      {
        if (storieProgress !== undefined) {
          storieProgress = '100%';
        }
      }, 3000);
    }else{
      console.log("else")
    }
  
    this.storiesVistas.push(this.userService.profileSelected.stories[0])

  }
  }
