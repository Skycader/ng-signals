import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  public postId = signal(1);

  public nextPost() {
    this.postId.update((userId) => userId + 1);
  }

  public prevPost() {
    this.postId.update((userId) => userId - 1);
  }

  public userId = signal(0);
}
