'use strict';

const _ = require('lodash');

module.exports = () => {
  return function* errorHandler(next) {
    try {

      yield next;

    } catch (err) {
      // 注意：自定义的错误统一处理函数捕捉到错误后也要`app.emit('error', err, this)`框架会统一监听，并打印对应的错误日志
      this.app.emit('error', err, this);

      // 自定义错误时异常返回的格式
      this.status = err.status || 500; // 默认是404

      // http://blog.csdn.net/rainbow702/article/details/50518171 this.body后会JSON.stringify()
      const _extra_info = _.mapValues(err.extra_info, value => {
        if (typeof value === 'undefined') {
          value = 'undefined'; // undefined -> 'undefined'
        }
        return value;
      });

      this.body = {
        success: false,
        // message: this.app.config.env === 'prod' ? 'Internal Server Error' : err.message,
        message: err.message,
        extra_info: _extra_info || '',
      };
    }
  };
};
