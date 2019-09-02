import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NewPostComponent} from './posts/new-post/new-post.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: 'new', component: NewPostComponent },
  { path: '#', redirectTo: 'posts' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
