import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Post {
  id: number;
  title: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // Cargar las publicaciones desde una API o utilizar datos ficticios
    this.posts = [
      { id: 1, title: 'Publicación 1' },
      { id: 2, title: 'Publicación 2' },
      { id: 3, title: 'Publicación 3' }
    ];
  }

  goToDetails(id: number) {
    // Navegar al componente "post-details" con el ID de la publicación
    this.router.navigate(['/post-details', id]);
  }
}
