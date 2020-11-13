const Router = require('koa-router');
const api = new Router(); //라우터 설정

const auth = require('./auth');

api.use('/auth', auth.routes());  //관제 or 모니터링 // 로그인

module.exports = api;
