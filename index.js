(function(){
  var axios, config, web;
  axios = require('axios');
  config = require("config-6du/6du.js");
  (async function(){
    var option, proxy, httpsProxyAgent, httpProxyAgent;
    option = {
      timeout: 6000
    };
    proxy = (await config.line('proxy'));
    if (proxy) {
      httpsProxyAgent = require('https-proxy-agent');
      httpProxyAgent = require('http-proxy-agent');
      option.httpsAgent = new httpsProxyAgent(proxy);
      option.httpAgent = new httpProxyAgent(proxy);
    }
    web = axios.create(option);
    web.defaults.headers.common["User-Agent"] = "6du";
  })();
  module.exports = web;
}).call(this);
