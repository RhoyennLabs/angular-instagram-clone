import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/userInterface';
import { post } from './models/postInterface';
import { likes } from './models/likesInterface';
import { stories } from './models/storiesInterface';

@Injectable({
  providedIn: 'root'
})
//crear funcion que cree automaticamente usuarios
export class UserService{
  usuarios: Usuario[] = [];
  namesToCreateUsers: string[] = [
    "jennifermorris_x",
    "daniel_smith_88",
    "victoria_jones12",
    "rebeccawilliams_33",
    "peter_davis_77",
    "emilyroberts_x",
    "william_miller_22",
    "ashleybaker123",
    "jacob_jackson_89",
    "sophia_wilson_21",
    "john_davis_456",
    "caroline_martin_123",
    "luke_thomas_777",
    "grace_anderson_x",
    "logan_walker_111",
  ];
  feedPosts: post[] =[]
  stories:stories[]=[]
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

      "https://res.cloudinary.com/debvhmcid/image/upload/v1751749015/rihanna_vx8inv.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1698132363/angular-dotnet-green_llcxfz.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323289/sm.1.750_tuibmh.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323258/1366_2000_zyxhhi.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323220/cp2077_game-thumbnail_ei4wys.webp",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323207/city-2567670_640_swfikv.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323126/images_q7crjk.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323104/mascara_wbfqgc.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323103/1438015713_triste1_lhj8ql.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323077/personas-controladoras-wide_webp_eggg1i.webp",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323054/daniela-kreimer_tivewc.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323025/shutterstock_1709675404.jpg_1758632412_ziexii.webp",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702326414/cannabis-leaf-medium_ajjplp.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323409/1664220539433_nzkcpu.webp",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702326482/image-41-1-500x311_v8jljr.webp",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1751748673/yo_e5bxdh.jpg"
    ];
  
    let postsImages: string[] = [
      "https://res.cloudinary.com/debvhmcid/image/upload/v1751749015/rihanna_vx8inv.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1702097158/happy-friends-love-hug_nlygqn.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1702097394/empire-state-building_ecb995bd_800x800_hh0ysu.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1751749342/gatitos_plzix4.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1751749342/gatitos_plzix4.jpg",
      "https://res.cloudinary.com/debvhmcid/image/upload/v1698132363/angular-dotnet-green_llcxfz.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323289/sm.1.750_tuibmh.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323258/1366_2000_zyxhhi.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323220/cp2077_game-thumbnail_ei4wys.webp",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323207/city-2567670_640_swfikv.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323126/images_q7crjk.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323104/mascara_wbfqgc.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323103/1438015713_triste1_lhj8ql.jpg",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323077/personas-controladoras-wide_webp_eggg1i.webp",
       "https://res.cloudinary.com/debvhmcid/image/upload/v1702323054/daniela-kreimer_tivewc.jpg",

    ];
    let postsComments: string[] = [
      "how cute!!! super genial!!",
      "felicidad es amar a otra persona.",
      "ya quiero viajar al extranjero",
      "¡Increíble! Estoy enamorado de este lugar.",
      "Hoy es un día maravilloso.",
      "La felicidad está en las pequeñas cosas.",
      "Mis sueños me llevan a lugares lejanos.",
      "Explorando nuevos horizontes.",
      "Viviendo el momento.",
      "¡Sonríe y sé feliz!",
      "La vida es un viaje increíble.",
      "Descubriendo nuevos destinos.",
      "Cada día es una nueva oportunidad.",
      "Disfrutando de la belleza que me rodea.",
      "Amando la vida y sus sorpresas."
    ];
    
    let postText: string[] = [
      "feliz de estar aquí",
      "someone noticed this day is the most shiny day ever?",
      "no quiero decir se los dije, pero se los dije.",
      "Viviendo el presente con gratitud.",
      "Aprovechando al máximo cada momento.",
      "La vida es un regalo precioso.",
      "Dejando una huella positiva en el mundo.",
      "Haciendo recuerdos que durarán toda la vida.",
      "Caminando hacia el futuro con confianza.",
      "Agradecido por las pequeñas cosas.",
      "Siempre mirando hacia adelante.",
      "Construyendo mi propia historia.",
      "Cada día es una nueva página en mi libro.",
      "La aventura comienza donde termina tu zona de confort.",
      "Creando momentos inolvidables."
    ];
    let finalUsersCreated: Usuario[] = [];

    for (let i = 0; i < Math.max(this.namesToCreateUsers.length, pictures.length, postsImages.length, postText.length); i++) {
      console.log("iteraciones del for:", Math.max(this.namesToCreateUsers.length, pictures.length, postsImages.length, postText.length))
      let randomUser = this.obtenerElementoUnico(this.namesToCreateUsers);
      console.log("randomUsers:",randomUser)
      let randomPic = this.obtenerElementoUnico(pictures);
      let randomComment= this.obtenerElementoUnico(postsComments)

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
            }],
            //las historias reales se ordenan por id,y además contienen la hora de subida, lo cual no incluimos aún.
          stories:[{
            id:1,
            usuario:randomUser,
            profilePicture:randomPic,
            picture: randomPic,
            seen:false,
            progress:"0%"
          },{
            id:2,
            usuario:randomUser,
            profilePicture:randomPic,
            picture: postsImages[i],
            seen:false,
            progress:"0%"
          }]
         };
             // Agregar el nuevo usuario al array final
            finalUsersCreated.push(newUser);
      
     
    } 
    this.usuarios = finalUsersCreated; // Asigna la lista de usuarios creados al array del servicio
    console.log("usuarios finales creados:",finalUsersCreated)
    //empujar todos los post de todos los usuarios a la feed
   this.usuarios.forEach(element => {
        element.posts.forEach(element=>{
          element.likes=this.getRandomLikes()
          this.feedPosts.push(element)  
          console.log(element.likes)
        })
      });
    
     //empujar todas las stories de todos los usuarios a la feed
     this.usuarios.forEach(element => {
      element.stories.forEach(element=>{
        this.stories.push(element)  
      })
    });
  }
  redirectToProfileSelected(usuario:string,input:string){
  const usuarioEncontrado = this.usuarios.find((user) => user.nombre === usuario);
  console.log("usuario encontrado:", usuarioEncontrado)
  if (usuarioEncontrado && input == 'stories') {
    this.profileSelected = usuarioEncontrado; 
  } else  if (usuarioEncontrado && input == 'profile'){
    this.profileSelected = usuarioEncontrado; 
    this.router.navigate(['/profile'])
  }
  }
  getLikesOfAPost(likes:likes[]){
    this.selectedPostLikes=likes
  }
  getRandomLikes(): likes[] {
    let copiaUsuarios = [...this.usuarios]; // Hacer una copia del array de usuarios
    let objetosFinales: likes[] = [];
  
    for (let index = 0; index < Math.floor(Math.random() * this.usuarios.length); index++) {
      let result = this.obtenerElementoUnico(copiaUsuarios);
      console.log("elemento unico:", result);
      objetosFinales.push({ usuario: result.nombre, userProfilePicture: result.profilePicture });
    }
  
    return objetosFinales;
  }
 } 