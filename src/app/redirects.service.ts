import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectsService {
  router:Router
  constructor(Router:Router) { 
  this.router=Router
  }
  redirect(link:string){
  this.router.navigate(['/',link]);
  }
}
