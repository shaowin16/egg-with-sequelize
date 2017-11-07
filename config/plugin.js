'use strict';

// had enabled by egg
exports.static = true;

exports.i18n = false;

exports.session = false;


// https://github.com/eggjs/egg-sequelize
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.validate = {
  enable: false,
  package: 'egg-validate',
};
