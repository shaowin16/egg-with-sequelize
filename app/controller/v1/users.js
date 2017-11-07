'use strict';

// Restful Api 加载形式，详见：
// https://eggjs.org/zh-cn/basics/router.html

module.exports = app => {

  class UserController extends app.Controller {

    // GET: /api/v1/users
    async index() {
      // const query = this.ctx.query;
      this.ctx.body = {
        message: 'hello world!',
      };

    }


    // GET: /api/v1/users/:id
    async show() {
      const user_id = this.ctx.params.id;
      this.ctx.body = await this.service.user.findUserById(user_id);
    }


    // POST: /api/v1/users
    async create() {
      // const body = this.ctx.request.body;

    }


    // PUT: /api/v1/users/:id
    async update() {
      // const user_id = this.ctx.params.id;
      // const body = this.ctx.request.body;


    }


    // DELETE: /api/v1/users/:id1,:id2,:id3...
    async destroy() {
      // const user_ids = this.ctx.params.id; // `GET /api/users/1,2,3` => `['1', '2', '3']`

    }
  }

  return UserController;
};
