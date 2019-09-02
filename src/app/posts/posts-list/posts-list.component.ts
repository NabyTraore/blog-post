import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {
  postsList: any[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.postsList = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
