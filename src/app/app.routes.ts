import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'counter',
    data: {
      shouldDetach: true,
    },
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
