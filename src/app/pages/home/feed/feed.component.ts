import { Component, ViewChildren,ElementRef } from '@angular/core';
import { UserService } from '../../../users.service';import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  comentariosForm: { [key: string]: FormGroup } = {};
  userService:UserService
  postComment:string
  constructor(UserService:UserService,private formBuilder: FormBuilder){
    this.userService=UserService
    this.postComment=''
    this.userService.feedPosts.forEach(publicacion => {
    this.comentariosForm[publicacion.picture] = this.formBuilder.group({
        comentario: ''
      });
  } )
}
  like(usuario:string, postID:string){
    //i treat the post src as the post id
    let elementoAeditar=this.userService.feedPosts.find(post=>{
      return post.usuario==usuario && post.picture == postID
    })

    if (elementoAeditar !== undefined) {
      // buscar el indice del like
      const adminLikeIndex = elementoAeditar.likes.findIndex(like => like.usuario === "admin");
    
      if (adminLikeIndex !== -1) {
        // recortamos el indice donde se encuentra el like
        elementoAeditar.likes.splice(adminLikeIndex, 1);
      } else {
        // Si "admin" no dio "like", agregar el "like"
        elementoAeditar.likes.push({
          usuario: "admin",
          userProfilePicture: "https://res.cloudinary.com/debvhmcid/image/upload/v1669777169/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk_qk4o71.jpg"
        });
      }
    }
  } 
    sendComment(usuario: string, postID: string) {
    const elementoAeditar = this.userService.feedPosts.find(post => {
      return post.usuario == usuario && post.picture == postID;
    });

    if (elementoAeditar !== undefined) {
      const comentarioFormGroup = this.comentariosForm[postID];
      const comentario = comentarioFormGroup.get('comentario')?.value;

      elementoAeditar.comments.push({
        usuario: 'admin',
        userProfilePicture: 'https://res.cloudinary.com/debvhmcid/image/upload/v1669777169/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk_qk4o71.jpg',
        comment: comentario
      });

      // Limpiar el comentario después de agregarlo
      comentarioFormGroup.reset();
    }
  }
}
