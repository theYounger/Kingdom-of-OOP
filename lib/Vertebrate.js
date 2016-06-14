'use strict';

import Bilateral from './Bilateral.js';

class Vertebrate extends Bilateral {

  constructor(name, body) {
    super(name, 'vertebral-column');
    this._name = name;
  }
}

export default Vertebrate;