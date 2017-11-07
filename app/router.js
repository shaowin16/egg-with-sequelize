'use strict';

module.exports = app => {

  const APP_CONTEXT = 'fcbb-dc';

  const payload = app.middlewares.payload(); // 统一消息体

  app.resources('users', `/${APP_CONTEXT}/api/v1/users`, payload, app.controller.v1.users);

};
