import { Component, OnInit, ViewChild, ElementRef, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements AfterViewInit {
  storieActual:string | null
  @ViewChild('modalStorie') modalStorie?: ElementRef | undefined;

  storiesToShow:stories[] | null
  storieProgress:string
  storiesVistas:any[]=[]
  userService:UserService 
  constructor(UserService:UserService){ 
    this.userService= UserService  
    this.storieActual=null
    this.storiesToShow=null
    this.storieProgress=''
  }
  ngAfterViewInit () {


  }

//incluir algoritmo que tome la primera historia que no se ha visto

  openStoriesModal(nombre:string){
    this.userService.redirectToProfileSelected(nombre,'stories')
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
     if(this.modalStorie != undefined){
      this.modalStorie.nativeElement.style.display='block'
     }

  }
   closeStoriesModal(){
    if(this.modalStorie != undefined){
     this.modalStorie.nativeElement.style.display='none'
    }
 }
  }
