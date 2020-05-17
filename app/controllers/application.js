import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get data() {
    return this.store.peekAll('post').filterBy('user.id', 1);
  }
}
