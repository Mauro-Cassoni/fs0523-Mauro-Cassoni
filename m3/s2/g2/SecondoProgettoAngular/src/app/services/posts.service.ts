import { Injectable } from '@angular/core';
import { IPost } from '../Models/ipost'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:IPost[] = [
    {
      "id" : 0,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : true
    },
    {
      "id" : 1,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : false
    },
    {
      "id" : 2,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : true
    },
    {
      "id" : 3,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : false
    },
    {
      "id" : 4,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : true
    },
    {
      "id" : 5,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : false
    }
  ];

  getActivePosts(){
    return this.posts.filter(p => p.active)
  }

  getInactivePosts(){
    return this.posts.filter(p => !p.active)
  }
}
