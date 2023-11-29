import { Component } from '@angular/core';
import { IPost } from '../../Models/ipost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrl: './post-inattivi.component.scss'
})
export class PostInattiviComponent {
  inactivePost:IPost[] = [];

  constructor(private PostsService: PostsService){}

  ngOnInit(){
    this.inactivePost = this.PostsService.getInactivePosts()
  }
}
