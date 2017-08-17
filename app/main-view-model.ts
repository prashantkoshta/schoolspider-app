import {Observable} from 'data/observable';

export class HelloWorldModel extends Observable {

  private _counter: number;
  private _message: string;

  constructor() {
    super();

    // Initialize default values.
    this._counter = 2;
    this.updateMessage();
  }

  get message(): string {
    return this._message;
  }
  
  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value)
    }
  }

  public onTap() {
    this._counter--;
    this.updateMessage();
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    } else {
      this.message = `${this._counter} taps lefts`;
    }
  }
}