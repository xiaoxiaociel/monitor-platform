'use strict';

module.exports = appInfo => {
  const config = exports = {
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '1234567890',
        database: 'wetime'
      },
      app: true,
      agent: false
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535806071500_671';

  // add your config here
  config.middleware = [];

  return config;
};
