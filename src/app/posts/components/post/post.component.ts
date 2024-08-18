import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';
import { Post } from '../../models/post.class';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  public postId = input(1, { alias: 'postId' });

  public loading = signal(false);
  public error = signal(false);

  private http = inject(HttpClient);

  public post$ = toObservable(this.postId).pipe(
    tap(() => {
      this.loading.set(true);
    }),
    switchMap((postId) =>
      this.http
        .get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .pipe(
          tap(() => this.error.set(false)),
          tap(() => this.loading.set(false)),
          tap((post: Post) => this.post.set(post)),
          catchError(() => {
            console.log('error');
            this.error.set(true);
            return of(new Post());
          })
        )
    )
  );

  public postObserver = toSignal(this.post$);

  public post = signal(new Post());
}
