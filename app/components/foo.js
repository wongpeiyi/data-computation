import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FooComponent extends Component {
  @service store;

  get dataLength() {
    return this.args.data.length;
  }

  @action
  createPost() {
    this.store.createRecord('post').save();
  }
}
