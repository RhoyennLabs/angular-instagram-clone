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
    if (this.modalStorie != undefined) {
      this.modalStorie.nativeElement.style.display = 'block';
    }
  }
  changeStorie(){
   // this.storiesToShow es el jefe. this.storieActual es jefe tambien pero storiesToShow va primero
  }
  closeStoriesModal() {
    if (this.modalStorie != undefined) {
      this.modalStorie.nativeElement.style.display = 'none';
    }
  }
}