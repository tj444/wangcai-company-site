'use strict';

const config = require('../config/config.ssr');

module.exports = app => {
  const { router, controller } = app;
  config.routes.map(route => {
    router.get(`${route.path}`, controller[route.controller][route.handler]);
  });
  router.get('/api/getIndexData', controller.api.index);
  router.get('/api/getForecastData', controller.api.forecast);
  router.get('/api/getForecastData/getItem', controller.api.forecastList);
};
