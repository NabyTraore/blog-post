import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Post} from '../../models/pots';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit, OnDestroy {

  postForm: FormGroup;
  post: Post;
  postDate: Date;
  index: number;
  loveNumber: number;
  formStatus: string;

  postList: any[];
  postSubscription: Subscription;

  constructor( private formBuilder: FormBuilder,
               private postsService: PostsService,
               private router: Router ) { }

  ngOnInit() {
    this.initForm();
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.postList = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    this.postDate = new Date;
    this.index = this.postList.length;
    this.loveNumber = 0;

    if ( formValue.title !== '' && formValue.content !== '') {

      const newPost = new Post(
        this.index,
        formValue.title,
        formValue.content,
        this.postDate,
        this.loveNumber
      );
      this.postsService.addNewPost(newPost);
      this.router.navigate(['/posts']);

    } else {

      this.formStatus = 'disabled';

    }
  }

}
