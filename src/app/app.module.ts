import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostListComponent,
    PostDetailsComponent,
    UserListComponent,
    UserDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'post-list', component: PostListComponent },
      { path: 'post-details/:id', component: PostDetailsComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-details/:id', component: UserDetailsComponent },
      { path: '**', component: NotFoundComponent },

    ]),

    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
