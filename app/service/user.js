const Service = require('egg').Service;

class UserService extends Service {
  async login(request) {
    let condition = { name: request.name };
    let record = await this.app.mysql.get('user', condition);
    return record;
  }
}

module.exports = UserService;
