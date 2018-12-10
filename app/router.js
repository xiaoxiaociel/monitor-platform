'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/item', controller.home.getItem);

  router.get('/wetimeios?page_num=1&page_size=5', controller.ioslist.getIosList);
  router.get('/wetimeios', controller.ioslist.getIosList);
  router.get('/insertwetimeios', controller.ioslist.insert);

};
