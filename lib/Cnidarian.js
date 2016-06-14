'use strict';

import Animal from './Animal.js';

class Cnidarian extends Animal {

  constructor(name, symmetry) {
    super(name, 'radial');
    this._name = name;
  }
}