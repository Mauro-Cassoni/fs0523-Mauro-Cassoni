import { Injectable } from '@angular/core';
import { IPost } from '../Models/ipost'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: IPost[] = [
    {
      "id": 0,
      "body": "lorem ipsum dolor sit amet",
      "title": "Lorem Ipsum",
      "active": true,
      "type": "politics",
      "author": "Mario",

    },
    {
      "id": 1,
      "body": "lorem ipsum dolor sit amet",
      "title": "Lorem Ipsum",
      "active": false,
      "type": "education",
      "author": "Giovanni",
    },
    {
      "id": 2,
      "body": "lorem ipsum dolor sit amet",
      "title": "Lorem Ipsum",
      "active": true,
      "type": "news",
      "author": "Pasquale",
    },
    {
      "id": 3,
      "body": "lorem ipsum dolor sit amet",
      "title": "Lorem Ipsum",
      "active": false,
      "type": "politics",
      "author": "Francesco",
    },
    {
      "id": 4,
      "body": "lorem ipsum dolor sit amet",
      "title": "Lorem Ipsum",
      "active": true,
      "type": "education",
      "author": "Settimo",
    },
    {
      "id": 5,
      "body": "lorem ipsum dolor sit amet",
      "title": "Lorem Ipsum",
      "active": false,
      "type": "news",
      "author": "Maria",
    },
    {
      "id": 6,
      "body": "lorem ipsum dolor sit amet",
      "title": "Lorem Ipsum",
      "active": true,
      "type": "news",
      "author": "Giovanna",
    }
  ];

  getActivePosts() {
    return this.posts.filter(p => p.active)
  }

  getInactivePosts() {
    return this.posts.filter(p => !p.active)
  }
}
