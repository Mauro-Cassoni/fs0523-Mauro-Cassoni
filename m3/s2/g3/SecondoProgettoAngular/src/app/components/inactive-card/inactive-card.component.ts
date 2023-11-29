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
}
