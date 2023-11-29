import { Component, Input } from '@angular/core';
import { IPost } from '../../Models/ipost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: '.app-active-card',
  templateUrl: './active-card.component.html',
  styleUrl: './active-card.component.scss'
})
export class ActiveCardComponent {

  constructor(private PostsService: PostsService){}

  @Input() posts:IPost[] = [];
}
