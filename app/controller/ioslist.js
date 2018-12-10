'use strict';

const Controller = require('egg').Controller;

class IosListController extends Controller {
  async index() {
    const ctx = this.ctx;
    const item = await ctx.service.ioslist.find();
    ctx.body = item;
  }
  async getIosList() {
    const response = { success:false, message: "操作失败"};
    const ctx = this.ctx;
    const list = await ctx.service.ioslist.fetch(ctx.query);
    if(list){
      response.success = true;
      response.message = '操作成功';
      response.data = list
    }
    ctx.body = response;
    ctx.status = 200;
  }
  async insert() {
    const response = { success: false, message: "操作失败" };
    const ctx = this.ctx;
    const item = await ctx.service.ioslist.insert(ctx.query)
    if(item && item.affectedRows){
      let returnBody = ctx.request.body;
      response.message = "操作成功";
      response.success = true;
      response.data = item
    }
    ctx.body = response;
    ctx.status = 200;
  }
}

module.exports = IosListController;
