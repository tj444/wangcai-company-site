const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    //所有彩种开奖结果
    const { ctx } = this;
    try {
      ctx.type = 'application/json';
      ctx.status = 200;
      const resp = await this.ctx.curl('https://api.icaipiao123.com/api/v6/lotterynums/latest/all', {
        method: 'get',
        headers: {
          'User-Agent': 'xWangcai Browser',
        },
        dataType: 'json',
      });
      if (resp.status === 200) {
        ctx.body = resp.data.data;
      } else {
        ctx.body = {};
      }
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = {};
    }
  }
  async getTag() {
    //咨询
    const { ctx } = this;
    try {
      ctx.type = 'application/json';
      ctx.status = 200;
      const resp = await this.ctx.curl('https://api.icaipiao123.com/api/v8/search/bytags', {
        method: 'get',
        headers: {
          'User-Agent': 'xWangcai Browser',
        },
        data: ctx.query,
        dataType: 'json',
      });

      if (resp.status === 200) {
        ctx.body = resp.data.data;
      } else {
        ctx.body = [];
      }
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = [];
    }
  }
  async forecast() {
    const { ctx } = this;
    try {
      ctx.type = 'application/json';
      ctx.status = 200;

      const resp = await this.ctx.curl('https://s0.icaipiao123.com/api/v2/rank/landing', {
        method: 'get',
        headers: {
          'User-Agent': 'xWangcai Browser',
        },
        data: ctx.query,
        dataType: 'json',
      });
      if (resp.status === 200 && resp.data  && resp.data.status === 0) {
        ctx.body = resp.data.data;
      } else {
        ctx.body = [];
      }
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = [];
    }
  }
  async forecastList() {
    const { ctx } = this;
    try {
      ctx.type = 'application/json';
      ctx.status = 200;
      const url = `https://s0.icaipiao123.com/api/v2/rank/items/${ctx.query.lottery_key}?encrypt=false`;
      const resp = await this.ctx.curl(url, {
        method: 'get',
        headers: {
          'User-Agent': 'xWangcai Browser',
        },
        dataType: 'json',
      });

      if (resp.status == 200 && resp.data &&  resp.data.status == 0) {
        ctx.body = resp.data;
      } else {
        ctx.body = {};
      }
    } catch (error) {
      ctx.logger.error(error);
    }
  }
}

module.exports = ApiController;
