'use strict'

const { Service } = require('egg')

class ApiService extends Service {
  async index () {
    let data = (await this.ctx.curl("https://api.icaipiao123.com/api/v6/lotterynums/latest/all",{
      method: 'get',
      headers:{//自定义header
        "User-Agent": "xWangcai Browser",
      },
      dataType: 'json'
    })).res.data;
   return data;
  }
  async forecast(){
    let a = (await this.ctx.curl("https://s0.icaipiao123.com/api/v2/rank/landing?lottery_key=shuangseqiu&encrypt=false",{
      method: 'get',
      headers:{//自定义header
        "User-Agent": "xWangcai Browser",
      },
      dataType: 'json'
    })).res.data
   return a
  }
  async forecastList() {
    const { ctx } = this;
  
    let b  = (await this.ctx.curl(`https://s0.icaipiao123.com/api/v2/rank/items/shuangseqiu?encrypt=false`,{
        method: 'get',
        headers:{//自定义header
          "User-Agent": "xWangcai Browser",
        },
        dataType: 'json'
      })).res.data
    return b  
   
  }
}

module.exports = ApiService
