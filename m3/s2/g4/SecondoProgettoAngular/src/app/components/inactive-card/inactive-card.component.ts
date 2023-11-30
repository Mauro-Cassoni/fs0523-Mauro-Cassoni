import { Component, Input } from '@angular/core';
import { IPost } from '../../Models/ipost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: '.app-inactive-card',
  templateUrl: './inactive-card.component.html',
  styleUrl: './inactive-card.component.scss'
})
export class InactiveCardComponent {

  constructor(private PostsService: PostsService){}

  @Input() posts:IPost[] = [];

  getClassObj(post: IPost): any{
    return{
      'bg-warning':post.type == 'news',
      'bg-black':post.type == 'politics',
      'text-white':post.type == 'politics',
      'bg-info':post.type == 'education'
    }
  }
}
