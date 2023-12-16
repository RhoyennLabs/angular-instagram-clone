import { Component, OnInit, ViewChild, ElementRef, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../../users.service';
import { stories } from '../../../models/storiesInterface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements OnInit {
  storieActual:string | null
  @ViewChild('modalStorie') modalStorie?: ElementRef | undefined;
 
  storiesToShow:stories[] | null
  storieProgress:string
  storiesVistas:any[]=[]
  userService:UserService 
  loading:boolean

  constructor(UserService:UserService){ 
    this.userService= UserService  
    this.loading= false
    this.userService.usuarios.forEach(element => {
      this.loading=false
      element.stories.forEach(element2 => {
      
        this.storiesToShow?.push(element2)
      })
    });
    this.loading= true
    this.storieActual=null
    this.storiesToShow=null
    this.storieProgress=''
    
  }
  ngOnInit() {
   
  }

//incluir algoritmo que tome la primera historia que no se ha visto

  openStoriesModal(nombre:string){
      if (this.storiesToShow) {
        // Encontrar el índice del elemento que coincide con el nombre
        const index = this.storiesToShow.findIndex((element) => element.usuario === nombre);
    
        if (index !== -1) {
          // Mover el elemento encontrado a la primera posición
          const foundElement = this.storiesToShow.splice(index, 1)[0];
          this.storiesToShow.unshift(foundElement);
     }
    if (storiePicture !== undefined) {
      console.log("obviamente no es undefined")
      this.userService.profileSelected.stories[0].progress = '0%';
      setTimeout(() => 
      {
        if (this.userService.profileSelected.stories[0].progress !== undefined) {
          this.userService.profileSelected.stories[0].progress = '100%';
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
  }
   closeStoriesModal(){
    if(this.modalStorie != undefined){
     this.modalStorie.nativeElement.style.display='none'
    }
 }
  }
