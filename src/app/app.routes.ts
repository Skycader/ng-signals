import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/components/counter/counter.component').then(
        (c) => c.CounterComponent
      ),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./posts/components/posts/posts.component').then(
        (c) => c.PostsComponent
      ),
  },
];
