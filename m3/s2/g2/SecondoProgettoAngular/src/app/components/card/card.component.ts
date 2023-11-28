import { IPost } from '../../Models/ipost';
import { PostsService } from './../../services/posts.service';
import { Component } from '@angular/core';

@Component({
  selector: '.app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  posts:IPost[] = [];

  constructor(private PostsService: PostsService){}
}
