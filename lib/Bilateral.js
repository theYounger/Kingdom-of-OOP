'use strict';

import Animal from './Animal.js';

class Bilateral extends Animal {

  constructor(name, body, symmetry) {
    super(name, body, 'bilateral');
    this._name = name;
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body(body) {
    this._body = body;
  }
}

export default Bilateral;