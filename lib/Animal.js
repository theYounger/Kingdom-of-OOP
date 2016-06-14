'use strict';

import Eukaryota from './Eukaryota.js';

class Animal extends Eukaryota {

  constructor(name, uniCellular, asexual, mobile, heterotroph, symmetry) {
    super(name, false, false, true, true, symmetry);
    this._name = name;
    this._symmetry = symmetry;
  }

  get symmetry() {
    return this._symmetry;
  }

  set symmetry(symmetry) {
    this._symmetry = symmetry;
  }
}

export default Animal;