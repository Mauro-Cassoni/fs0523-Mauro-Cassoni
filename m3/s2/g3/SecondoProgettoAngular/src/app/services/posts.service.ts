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
      "active" : true,
      "type" : "politics"
    },
    {
      "id" : 1,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : false,
      "type" : "education"
    },
    {
      "id" : 2,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : true,
      "type" : "news"
    },
    {
      "id" : 3,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : false,
      "type" : "politics"
    },
    {
      "id" : 4,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : true,
      "type" : "education"
    },
    {
      "id" : 5,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : false,
      "type" : "news"
    },
    {
      "id" : 6,
      "body": "lorem ipsum dolor sit amet",
      "title" : "Lorem Ipsum",
      "active" : true,
      "type" : "news"
    }
  ];

  getActivePosts(){
    return this.posts.filter(p => p.active)
  }

  getInactivePosts(){
    return this.posts.filter(p => !p.active)
  }
}
