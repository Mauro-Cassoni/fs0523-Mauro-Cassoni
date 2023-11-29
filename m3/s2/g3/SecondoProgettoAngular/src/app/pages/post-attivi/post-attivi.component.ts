import { Component } from '@angular/core';
import { IPost } from '../../Models/ipost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrl: './post-attivi.component.scss'
})
export class PostAttiviComponent {

  activePost:IPost[] = [];

  constructor(private PostsService: PostsService){}

  ngOnInit(){
    this.activePost = this.PostsService.getActivePosts()
  }
}
