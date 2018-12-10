'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const item = await ctx.service.ioslist.find();
    ctx.body = item;
  }
  async getItem() {
    const ctx = this.ctx;
    const item = await ctx.service.ioslist.find();
    ctx.body = item;
  }
}

module.exports = HomeController;
