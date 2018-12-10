const Service = require('egg').Service;

class ListService extends Service {
  async find() {
    const item = await this.app.mysql.get('wetimeios', { id: 1 });
    return {
      item
    }
  }
  async fetch(param) {
    let start = (param.page_num - 1) * param.page_size;
    let queryStr = `select * from wetimeios limit ${start}, ${param.page_size}`;
    const result = await this.app.mysql.query(queryStr);
    return {
      result: result
    }
  }
  async insert(param = {}) {
    let test = {
      name: 'test',
      platform: 'ios',
      version_num: '5.0.8',
      build_num: 'build_5.0.8',
      package_num: '2222',
      win_url: '',
      mac_url: '',
      branch: 'master',
      create_date: '2018-09-03 00:00:00'
    }
    const result = await this.app.mysql.insert('wetimeios', test);
    return result;
  }
}

module.exports = ListService;
