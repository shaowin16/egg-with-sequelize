'use strict';

// 中间件只能用 Generator形式

module.exports = () => {

  return function* payload(next) {

    // ######## request phase ########

    yield next;

    // ######## response phase ########

    // 正确情况统一消息体 payload
    this.body = {
      success: true,
      payload: this.body || '',
    };

  };

};
