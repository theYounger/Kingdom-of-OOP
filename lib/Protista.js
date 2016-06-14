'use strict';

import Eukaryota from  '/.Eukaryota.js';

class Protista extends Eukaryota {

  constructor(name, uniCellular, mobile, heterotroph, asexual) {
    super(asexual);
    this._name = name;
    this._uniCellular = uniCellular;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }
}