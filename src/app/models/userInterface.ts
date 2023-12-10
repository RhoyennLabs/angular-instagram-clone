import { post } from "./postInterface";
export interface Usuario {
    id: number;
    nombre: string;
    profilePicture: string
    posts: post[]
  }