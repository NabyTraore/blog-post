import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss']
})
export class PostsListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() date: Date;
  @Input() loveIts: number;
  @Input() index: number;

  constructor( private postService: PostsService) { }

  ngOnInit() {
  }

  onlikes() {
    this.postService.loveIt(this.index);
  }

  onDislikes() {
    this.postService.dontLoveIt(this.index);
  }

  ondelete() {
    this.postService.removePost(this.index);
  }
}
