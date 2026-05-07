import { Component, computed, input } from '@angular/core';
import { Post } from '../../models/post.class';
import { httpResource } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [JsonPipe], // CommonModule больше не нужен, если вы использовали только async/if/for
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  // Автоматически отслеживается ресурсом при изменении
  public postId = input(1, { alias: 'postId' });

  // Создаем ресурс. Передаем функцию-сигнал для URL
  public postResource = httpResource<Post>(
    () => `https://jsonplaceholder.typicode.com/posts/${this.postId()}`,
  );

  // Для сохранения обратной совместимости с вашим старым шаблоном:
  // postResource.value() вернет Post | undefined.
  // Если вам строго нужен пустой объект по умолчанию вместо undefined:
  public post = computed(() => this.postResource.value() ?? new Post());

  // Встроенные сигналы состояния
  public get loading() {
    return this.postResource.isLoading;
  }
  public get error() {
    return this.postResource.error;
  }
}
