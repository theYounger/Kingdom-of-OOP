'use strict';

import Eukaryota from './Eukaryota.js';

class Fungi extends Eukaryota {

  constructor(name, uniCellular, asexual, mobile, heterotroph) {

    super(uniCellular, asexual, mobile, heterotroph);
    this._name = name;
  }
}