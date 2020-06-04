import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  get data() {
    return this.store.peekAll('post').filterBy('user.id', '1');
  }

  @action
  createPost() {
    this.store.createRecord('post').save();
  }
}
