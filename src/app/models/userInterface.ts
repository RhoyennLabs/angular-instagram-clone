import { post } from "./postInterface";
import { stories } from "./storiesInterface";
export interface Usuario {
    id: number;
    nombre: string;
    profilePicture: string
    posts: post[]
    stories:stories[]

  }