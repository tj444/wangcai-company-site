const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      // Page为webpack打包的chunkName，项目默认的entry为Page
      ctx.type = 'text/json';
      ctx.status = 200;
      ctx.body = (
        await this.ctx.curl('https://api.icaipiao123.com/api/v6/lotterynums/latest/all', {
          method: 'get',
          headers: {
            //自定义header
            'User-Agent': 'xWangcai Browser',
          },
          dataType: 'json',
        })
      ).res.data;
    } catch (error) {
      ctx.logger.error(error);
    }
  }
  async forecast() {
    const { ctx } = this;
    try {
      ctx.type = 'text/json';
      ctx.status = 200;

      ctx.body = (
        await this.ctx.curl('https://s0.icaipiao123.com/api/v2/rank/landing', {
          method: 'get',
          headers: {
            //自定义header
            'User-Agent': 'xWangcai Browser',
          },
          data: ctx.query,
          dataType: 'json',
        })
      ).res.data;
    } catch (error) {
      ctx.logger.error(error);
    }
  }
  async forecastList() {
    const { ctx } = this;
    try {
      ctx.type = 'text/json';
      ctx.status = 200;

      ctx.body = (
        await this.ctx.curl(`https://s0.icaipiao123.com/api/v2/rank/items/${ctx.query.type}?encrypt=false`, {
          method: 'get',
          headers: {
            //自定义header
            'User-Agent': 'xWangcai Browser',
          },
          dataType: 'json',
        })
      ).res.data;
    } catch (error) {
      ctx.logger.error(error);
    }
  }
}

module.exports = ApiController;
