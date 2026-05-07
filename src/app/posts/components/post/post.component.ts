import { Component, input } from '@angular/core';
import { Post } from '../../models/post.class';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [], // CommonModule больше не нужен, если вы использовали только async/if/for
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
  public get post() {
    return this.postResource.value() ?? new Post();
  }

  // Встроенные сигналы состояния
  public get loading() {
    return this.postResource.loading;
  }
  public get error() {
    return this.postResource.error;
  }
}
