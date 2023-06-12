import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'posts', component: PostListComponent },
{ path: 'posts/:id', component: PostDetailsComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
