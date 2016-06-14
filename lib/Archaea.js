'use strict';

import LivingThing from './LivingThing.js';

class Archaea extends LivingThing {

  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    super(uniCellular, trueNucleus, anaerobic, asexual, mobile);
    this._name = name;
  }
}
