import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/userInterface';
import { post } from './models/postInterface';
import { likes } from './models/likesInterface';

@Injectable({
  providedIn: 'root'
})
//crear funcion que cree automaticamente usuarios
export class UserService{
  usuarios: Usuario[] = [];
  feedPosts: post[] =[]
  profileSelected: Usuario
  textoBusqueda: string = '';
  usuariosDeLaBusqueda: Usuario[] = [];
  selectedPostLikes:likes[]=[]
  router:Router
  constructor(Router:Router) {
     this.crearUsuarios();
     this.profileSelected=this.usuarios[0]
     this.router=Router
   }
   private obtenerElementoUnico<T>(array: T[]): T {
    const indice = Math.floor(Math.random() * array.length);
    const elemento = array.splice(indice, 1)[0];
    return elemento;
  }

 async filtrarUsuarios(): Promise<void> {
  if(this.textoBusqueda != ''){
    console.log(this.textoBusqueda);
    this.usuariosDeLaBusqueda=[]
    let usuariosEncontrados: any[] =await this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  
    if (usuariosEncontrados.length === 0) {
      this.usuariosDeLaBusqueda = [];
    }else if(usuariosEncontrados.length > 0){
      this.usuariosDeLaBusqueda = usuariosEncontrados;
    }
  }else{
    this.usuariosDeLaBusqueda = [];
  }
    
  }

  private async crearUsuarios():Promise<void>{
    let pictures: string[] = [
      "https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/serviciosocial_cdw2nz.png",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1692592508/templario/Captura8_bdr8yw.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1698132363/angular-dotnet-green_llcxfz.jpg"
    ];
  
    let postsImages: string[] = [
      "https://res.cloudinary.com/debvhmcid/image/upload/v1702097049/rm_lgz3zn.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1702097158/happy-friends-love-hug_nlygqn.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1702097394/empire-state-building_ecb995bd_800x800_hh0ysu.jpg"
    ];
    let postsComments: string[] = [
      "how cute!!! super genial!!",
      "felicidad es amar a otra persona.",
      "ya quiero viajar al extranjero"
    ];
    let postText: string[] = [
      "feliz de estar aquí",
      "someone noticed this day is the most shiny day ever?",
      "no quiero decir se los dije, pero se los dije."
    ];
  
    let users: string[] = ["rodrigoa44", "felipex777", "joserodriguez"];
    let finalUsersCreated: Usuario[] = [];


    for (let i = 0; i < Math.max(users.length, pictures.length, postsImages.length, postText.length); i++) {
      let randomUser = this.obtenerElementoUnico(users);
      let randomPic = this.obtenerElementoUnico(pictures);
      let randomComment= this.obtenerElementoUnico(postsComments)
      if(this.usuarios.length > 1){
 // Seleccionar un nombre aleatorio de la lista de nombres

          let newUser: Usuario = {
            id: (i + 1),
            nombre:randomUser,
            profilePicture: randomPic,
            posts: [{
              usuario:randomUser,
              profilePicture:randomPic,
              description: postText[i],
              picture: postsImages[i],
              likes:await this.getRandomLikes(),
              comments:[{usuario:randomUser,userProfilePicture: postsImages[i],comment:randomComment}]
              }]
           };
               // Agregar el nuevo usuario al array final
              finalUsersCreated.push(newUser);
      }else{
        let newUser: Usuario = {
          id: (i + 1),
          nombre:randomUser,
          profilePicture: randomPic,
          posts: [{
            usuario:randomUser,
            profilePicture:randomPic,
            description: postText[i],
            picture: postsImages[i],
            likes:[{userProfilePicture:randomPic,usuario:randomUser}],
            comments:[{usuario:randomUser,userProfilePicture: postsImages[i],comment:randomComment}]
            }]
         };
             // Agregar el nuevo usuario al array final
            finalUsersCreated.push(newUser);
      }
     
    } 
   //empujar todos los post de todos los usuarios a la feed
    finalUsersCreated.forEach(element => {
        element.posts.forEach(element=>{
          this.feedPosts.push(element)
        })
      });
   
    this.usuarios = finalUsersCreated; // Asigna la lista de usuarios creados al array del servicio
    console.log(finalUsersCreated);
  }
  redirectToProfileSelected(usuario:string){
  const usuarioEncontrado = this.usuarios.find((user) => user.nombre === usuario);

  if (usuarioEncontrado) {
    this.profileSelected = usuarioEncontrado; 
    this.router.navigate(['/profile'])
  } else {
    alert("El usuario ya no se encuentra en instagram o no se ha registrado")
  }
  }
  getLikesOfAPost(likes:likes[]){
    this.selectedPostLikes=likes
  }
  getRandomLikes():Like[]{
    const totalDeLikes = Math.floor(Math.random() * this.usuarios.length);

  }
 } 