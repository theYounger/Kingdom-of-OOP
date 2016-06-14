'use strict';

import Bilateral from './Bilateral';

class Anthropod extends Bilateral {

  constructor(name, body) {
    super(name, 'exoskeleton');
    this._name = name;
  }
}

export default Anthropod;
