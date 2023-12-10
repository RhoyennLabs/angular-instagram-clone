import { likes } from "./likesInterface"
import { comments } from "./commentsInterface"
export interface post {
    usuario:string
    profilePicture:string
    description:string
    picture:string
    likes:likes[]
    comments:comments[]
  }