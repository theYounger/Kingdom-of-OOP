'use strict';

import Bilateral from './Bilateral.js';

class Mollusk extends Bilateral {

  constructor(name, body) {
    super(name, 'soft-bodied');
    this._name = name;
  }
}