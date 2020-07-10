'use strict'

const { Service } = require('egg')

class ApiService extends Service {
  index () {
    return {
      news: [
        {
          id: '1',
          title: 'Racket v7.3 Release Notes'
        },
        {
          id: '2',
          title: 'Free Dropbox Accounts Now Only Sync to Three Devices'
        },
        { id: '3',
          title: 'Voynich Manuscript Decoded by Bristol Academic'
        },
        { id: '4',
          title: 'Burger King to Deliver Whoppers to LA Drivers Stuck in Traffic'
        },
        { id: '5',
          title: 'How much do YouTube celebrities charge to advertise your product? '
        }
      ]
    }
  }
  async forecast(id){
    let a = (await this.ctx.curl(`https://s0.icaipiao123.com/api/v2/rank/landing?lottery_key=${id}&encrypt=false`,{
      method: 'get',
      headers:{//自定义header
        "User-Agent": "xWangcai Browser",
      },
      dataType: 'json'
    })).res.data
   return a
  }
  async forecastList(id) {
    const { ctx } = this;
  
    let b  = (await this.ctx.curl(`https://s0.icaipiao123.com/api/v2/rank/items/${id}?encrypt=false`,{
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
