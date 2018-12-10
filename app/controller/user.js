'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const item = await ctx.service.list.find();
    console.log('item----',item);
    ctx.body = item;
  }
  async getItem() {
    const ctx = this.ctx;
    const item = await ctx.service.list.find();
    console.log('item----',item);
    ctx.body = item;
  }
  async authorize() {
    const name = this.ctx.request.body.username;
    const password = this.ctx.request.body.password;
  }
}

module.exports = UserController;
