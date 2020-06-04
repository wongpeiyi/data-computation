import Component from '@glimmer/component';

export default class FooComponent extends Component {
  get dataLength() {
    return this.args.data.length;
  }
}
