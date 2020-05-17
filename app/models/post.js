import Model, { belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @belongsTo('user') user;
}
