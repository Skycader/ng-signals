import { PostInterface } from './post.model';

export class Post implements PostInterface {
  userId = 0;
  id = 0;
  title = '';
  body = '';
}
