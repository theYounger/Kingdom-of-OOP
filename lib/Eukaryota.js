'use strict';

import LivingThing from './LivingThing.js';

class Eukaryota extends LivingThing {

  constructor(name, uniCellular, asexual, mobile, trueNucleus, anaerobic, heterotroph) {
    super(trueNucleus, anaerobic);
    this._name = name;
    this._uniCellular = uniCellular;
    this._asexual = asexual;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(heterotroph) {
    this._heterotroph = heterotroph;
  }

  get autotroph() {
    return this._heterotroph;
  }

  set autotroph(autotroph) {
    this._heterotroph = !autotroph;
  }
}

export default Eukaryota;